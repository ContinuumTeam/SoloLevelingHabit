import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import challenger from '../../challenges.json'
import Cookies from 'js-cookie'

interface ChallengeProps {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengerContextProps {
  level: number;
  currentExperience: number;
  challengersCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: ChallengeProps;
  levelUp: () => void;
  startNewChallenger: () => void;
  resetChallenger: () => void;
  completeChallenger: () => void
}

interface ChallengerProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number
  challengersCompleted: number;
}

export const ChallengerContex = createContext({} as ChallengerContextProps)

export function ChallengerProvider({ children, ...rest }: ChallengerProviderProps) {

  //#region const
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengersCompleted, setChallengersCompleted] = useState(rest.challengersCompleted ?? 1)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  //#endregion

  //#region Functions

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengersCompleted', String(challengersCompleted))
  }, [level, currentExperience, challengersCompleted])

  //funcao para uppar o level
  function levelUp() {
    setLevel(level + 1)
  }

  //funcao para resetar o desfio
  function resetChallenger() {
    setActiveChallenge(null)
  }

  //funcao para incrementar level
  function completeChallenger() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel

      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengersCompleted(challengersCompleted + 1)

  }


  //funcao para inciar um novo desafio
  function startNewChallenger() {


    const randomChallengerIndex = Math.floor(Math.random() * challenger.length)
    console.log(randomChallengerIndex);

    const challenge = challenger[randomChallengerIndex]
    console.log(challenge);

    setActiveChallenge(challenge)


    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', { body: `Valendo ${challenge.amount}xp` })
      new Audio("../../public/notification.mp3")
    }
  }
  //#endregion

  return (
    <ChallengerContex.Provider value={
      {
        level,
        levelUp,
        currentExperience,
        experienceToNextLevel,
        challengersCompleted,
        activeChallenge,
        startNewChallenger,
        resetChallenger,
        completeChallenger
      }
    }>
      {children}
    </ChallengerContex.Provider>
  )
}

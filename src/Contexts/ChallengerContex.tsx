import { createContext, useContext, useState, ReactNode } from 'react'
import challenger from '../../challenges.json'


interface ChallengeProps{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengerContextProps{
  level: number;
  currentExperience: number;
  ChallengersComplited: number;
  experienceToNextLevel: number;
  activeChallenge: ChallengeProps;
  levelUp: () => void;
  startNewChallenger: () => void;
  resetChallenger: () => void;
}

interface ChallengerProviderProps {
  children: ReactNode;
}

export const ChallengerContex = createContext({} as ChallengerContextProps)

export function ChallengerProvider({children}: ChallengerProviderProps){

  //#region const
   const [level, setLevel] = useState(1)
   const [currentExperience, setCurrentExperience] = useState(0)
   const [ChallengersComplited, setChallengersComplited] = useState(0)
   const [activeChallenge, setActiveChallenge] = useState(null)

   const experienceToNextLevel = Math.pow((level + 1)* 4, 2)
  //#endregion

  //#region Functions
   function levelUp(){
     setLevel(level + 1)
   }

   function resetChallenger(){
     setActiveChallenge(null)
   }

   function startNewChallenger(){


    const randomChallengerIndex = Math.floor(Math.random() * challenger.length)
    console.log(randomChallengerIndex);

    const challenge = challenger[randomChallengerIndex]
    console.log(challenge);

    setActiveChallenge(challenge)
   }
   //#endregion

   return(
    <ChallengerContex.Provider value={
      {
        level,
        levelUp,
        currentExperience,
        experienceToNextLevel,
        ChallengersComplited,
        activeChallenge,
        startNewChallenger,
        resetChallenger,
      }
    }>
      {children}
    </ChallengerContex.Provider>
   )
}

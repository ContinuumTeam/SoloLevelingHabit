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
  levelUp: () => void;
  activeChallenge: ChallengeProps;
  startNewChallenger: () => void;
}

interface ChallengerProviderProps {
  children: ReactNode;
}

export const ChallengerContex = createContext({} as ChallengerContextProps)

export function ChallengerProvider({children}: ChallengerProviderProps){

   const [level, setLevel] = useState(1)
   const [currentExperience, setCurrentExperience] = useState(0)
   const [ChallengersComplited, setChallengersComplited] = useState(0)
   const [activeChallenge, setActiveChallenge] = useState(null)



   function levelUp(){
     setLevel(level + 1)
   }
   function startNewChallenger(){

    const randomChallengerIndex = Math.floor(Math.random() * challenger.length)
    console.log(randomChallengerIndex);

    const challenge = challenger[randomChallengerIndex]
    console.log(challenge);

    setActiveChallenge(challenge)
   }

   return(
    <ChallengerContex.Provider value={
      {
        level,
        levelUp,
        currentExperience,
        ChallengersComplited,
        activeChallenge,
        startNewChallenger
      }
    }>
      {children}
    </ChallengerContex.Provider>
   )
}

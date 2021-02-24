import { createContext, useContext, useState, ReactNode } from 'react'

interface ChallengerContextProps{
  level: number,
  currentExperience: number,
  ChallengersComplited: number,
  levelUp: () => void,
  startNewChallenger: () => void
}

interface ChallengerProps {
  children: ReactNode;
}

export const ChallengerContex = createContext({} as ChallengerContextProps)

export function ChallengerProvider({children}: ChallengerProps){

   const [level, setLevel] = useState(1)
   const [currentExperience, setCurrentExperience] = useState(0)
   const [ChallengersComplited, setChallengersComplited] = useState(0)



   function levelUp(){
     setLevel(level + 1)
   }
   function startNewChallenger(){
     console.log('new challenger');
   }

   return(
    <ChallengerContex.Provider value={
      {
        level,
        levelUp,
        currentExperience,
        ChallengersComplited,
        startNewChallenger
      }
    }>
      {children}
    </ChallengerContex.Provider>
   )
}

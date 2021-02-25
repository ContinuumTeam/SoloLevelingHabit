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
  completeChallenger: () => void
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

    //funcao para uppar o level
   function levelUp(){
     setLevel(level + 1)
   }

    //funcao para resetar o desfio
   function resetChallenger(){
     setActiveChallenge(null)
   }

   //funcao para incrementar level
   function completeChallenger(){
     if(!activeChallenge){
       return;
     }

     const {amount} = activeChallenge

     let finalExperience = currentExperience + amount

     if(finalExperience >= experienceToNextLevel){
       finalExperience = finalExperience - experienceToNextLevel

       levelUp()
     }

     setCurrentExperience(finalExperience)
     setActiveChallenge(null)
     setChallengersComplited(ChallengersComplited + 1)

   }


  //funcao para inciar um novo desafio
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
        completeChallenger
      }
    }>
      {children}
    </ChallengerContex.Provider>
   )
}

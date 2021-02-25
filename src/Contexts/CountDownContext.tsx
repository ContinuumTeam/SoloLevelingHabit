import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengerContex } from './ChallengerContex'

let countdownTimeout: NodeJS.Timeout

interface CountDownContexData {
  minute: number,
  second: number,
  isActive: boolean,
  hasFinished: boolean,
  startCount: () => void,
  stopTheCount: () => void,
}

interface CountDownProviderProps {
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContexData )

export function CountDownProvider({children}: CountDownProviderProps){

  //#region Estados e Consts
  const {startNewChallenger} = useContext(ChallengerContex)

  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minute = Math.floor(time / 60)
  const second = time % 60
  //#endregion

  //#region Funcoes
  function startCount() {
    setIsActive(true)
  }

  function stopTheCount() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {

      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)

    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenger()
    }
  }, [isActive, time])

  //#endregion
  return(
    <CountDownContext.Provider value={{
      minute,
      second,
      isActive,
      hasFinished,
      startCount,
      stopTheCount,
    }}>
      {children}
    </CountDownContext.Provider>
  )
}

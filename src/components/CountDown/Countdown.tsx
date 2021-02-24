// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Container, Button } from './CountDownStyle'

let countdownTimeout: NodeJS.Timeout

const CountDown: React.FC = () => {
  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minute = Math.floor(time / 60)
  const second = time % 60

  const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('')

  function startCount() {
    setIsActive(true)
  }
  function stopTheCount() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
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
    }
  }, [isActive, time])

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>
      <Button>
        {hasFinished ? (
          <button disabled type="button" className="countdownButton">
            Ciclo Encerrado
          </button>) : (
          <>
            { !isActive ? (
              <button
                type="button"
                className="countdownButton"
                onClick={startCount}
              >
                iniciar um ciclo
              </button>
            ) : (
              <button
                type="button"
                className="stopTheCountButton"
                onClick={stopTheCount}
              >
                Abandonar ciclo X
              </button>
            )}
          </>
        )}
      </Button>
    </div>
  )
}

export default CountDown

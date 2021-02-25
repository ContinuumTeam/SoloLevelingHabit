import React, { useContext } from 'react'
import { ChallengerContex } from '../../Contexts/ChallengerContex'
import { CountDownContext } from '../../Contexts/CountDownContext'
import { Container, Button } from './CountDownStyle'

const CountDown: React.FC = () => {

  const {
    minute,
    second,
    hasFinished,
    startCount,
    isActive,
    stopTheCount
  } = useContext(CountDownContext)

  //#region ConstRegion
  const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('')
  //#endregion

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
          <button
            disabled
            type="button"
            className="countdownButton fineshedButton"
          >
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
                className="countdownButton stopTheCountButton"
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

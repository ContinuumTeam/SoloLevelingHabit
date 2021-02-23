// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Container, Button } from './CountDownStyle'

const CountDown: React.FC = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minute = Math.floor(time / 60)
  const second = time % 60

  const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('')

  function startCount() {
    setActive(true)
  }
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

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
        <button type="button" className="countdownButton" onClick={startCount}>
          iniciar um ciclo
        </button>
      </Button>
    </div>
  )
}

export default CountDown

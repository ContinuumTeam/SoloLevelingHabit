// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './CountDownStyle'

const CountDown: React.FC = () => {
  return (
    <Container>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </Container>
  )
}

export default CountDown

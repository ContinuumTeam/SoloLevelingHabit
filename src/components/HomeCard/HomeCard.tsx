// eslint-disable-next-line no-use-before-define
import React from 'react'
import LevelImage from '../../../public/icons/level-up.svg'

import { Container } from './CardStyled'

const HomeCard: React.FC = () => {
  return (
    <Container>
      <div className="first-div">
        <span>Inicie um ciclo para receber desafios a serem completados</span>
      </div>
      <div className="second-div">
        <LevelImage />
        <span>Complete-os e ganhe experiência e avance de leve.</span>
      </div>
    </Container>
  )
}

export default HomeCard

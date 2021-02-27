// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import { ChallengerContex } from '../../Contexts/ChallengerContex'
import { Container } from './ChallengersStyles'

const CompletedChallengers: React.FC = () => {

  const {challengersCompleted} = useContext(ChallengerContex)

  return (
    <Container>
      <span>Desafios Completos</span>
      <span>{challengersCompleted}</span>
    </Container>
  )
}

export default CompletedChallengers

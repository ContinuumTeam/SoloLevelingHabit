// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './styleLanding'
import Profile from '../../Profile/Profile'
import CompletedChallenger from '../../CompletedChallengers/CompletedChallengers'

const Landing: React.FC = () => {
  return (
    <Container>
      <section>
        <div>
          <Profile />
          <CompletedChallenger />
        </div>
        <div></div>
      </section>
    </Container>
  )
}

export default Landing

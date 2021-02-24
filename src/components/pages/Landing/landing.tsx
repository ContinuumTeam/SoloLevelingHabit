// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './styleLanding'

import Profile from '../../Profile/Profile'
import CompletedChallenger from '../../CompletedChallengers/CompletedChallengers'
import CountDown from '../../CountDown/Countdown'
import HomeCard from '../../HomeCard/HomeCard'

const Landing: React.FC = () => {
  return (
    <Container>
      <section>
        <div>
          <Profile />
          <CompletedChallenger />
          <CountDown />
        </div>
        <div>
          <HomeCard />
        </div>
      </section>
    </Container>
  )
}

export default Landing

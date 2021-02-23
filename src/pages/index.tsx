// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

// import LoveLogo from '../assets/undraw_Appreciation_re_p6rl.svg'
import { Container } from '../styles/pages/Home'

import Landing from '../components/Landing/landing'
import ExperinceBar from '../components/ExperianceBar/ExperinceBar'

import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ExperinceBar />
        <Landing />
      </Container>
    </ThemeProvider>
  )
}

export default Home

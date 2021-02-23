// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import Head from 'next/head'

// import LoveLogo from '../assets/undraw_Appreciation_re_p6rl.svg'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header/header'
import Landing from '../components/Landing/landing'
import ExperinceBar from '../components/ExperianceBar/ExperinceBar'

import { ThemeProvider } from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
const Home: React.FC = () => {
  const [mode, setMode] = useState(light)

  const toggleTheme = () => {
    setMode(mode.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={mode}>
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header toggleTheme={toggleTheme} />
        <ExperinceBar />
        {/* <LoveLogo />
      <h1>React Struture</h1>
      <p>A Typescript + NextJS Struture by with Love</p> */}
        <Landing />
      </Container>
    </ThemeProvider>
  )
}

export default Home

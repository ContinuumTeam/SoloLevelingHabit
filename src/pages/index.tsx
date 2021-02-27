// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

import { GetServerSideProps } from 'next'

import { ChallengerProvider } from '../Contexts/ChallengerContex'

// import LoveLogo from '../assets/undraw_Appreciation_re_p6rl.svg'
import { Container } from '../styles/pages/Home'

import Landing from '../components/pages/Landing/landing'
import ExperinceBar from '../components/ExperianceBar/ExperinceBar'

import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'

import GlobalStyles from '../styles/global'


interface HomeProps {
  level: number;
  currentExperience: number
  challengersCompleted: number;
}

export default function Home(props: HomeProps) {


  return (
    <ChallengerProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengersCompleted={props.challengersCompleted}

    >
      <ThemeProvider theme={light}>
        <Container>
          <Head>
            <title>Moovit</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <ExperinceBar />
          <Landing />
        </Container>
      </ThemeProvider>
      <GlobalStyles />
    </ChallengerProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExperience, challengersCompleted } = ctx.req.cookies
  console.log(level, currentExperience, challengersCompleted);

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengersCompleted: Number(challengersCompleted)
    }
  }
}

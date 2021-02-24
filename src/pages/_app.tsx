// eslint-disable-next-line no-use-before-define
import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { ChallengerProvider } from '../Contexts/ChallengerContex'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengerProvider >
      <Component {...pageProps} />
      <GlobalStyles />
    </ChallengerProvider>
  )
}

export default MyApp

// eslint-disable-next-line no-use-before-define
import React from 'react'
import LevelImage from '../../../public/icons/level-up.svg'
import BodyImage from '../../../public/icons/body.svg'

import { Container } from './CardStyled'

const HomeCard: React.FC = () => {

  const hasActiveChallenger = true;

  return (
    <Container>
      <>
      { hasActiveChallenger ? (
        <div className="challengerActive">

          <header> Ganhe 400 xp</header>

          <main>
            <BodyImage />
            <strong>Exercite-se</strong>
            <p>
              É agora Diegão, bora lá meu parça.
              Caminhe por 3 minutos e estique suas pernas
              pra você ficar saudável.
            </p>
          </main>

          <div className="div-button">
            <button type="button" className="failedChallengerButton"> Falhei </button>
            <button type="button" className="complitedChallengerButton"> Completei </button>
          </div>

        </div>
      ) : (
        <div className="first-div">
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <div className="second-div">
            <LevelImage />
            <span>Complete-os e ganhe experiência e avance de leve.</span>
          </div>
        </div>

      )}
      </>
    </Container>
  )
}

export default HomeCard

// eslint-disable-next-line no-use-before-define
import React, {useContext} from 'react'
import LevelImage from '../../../public/icons/level-up.svg'
import BodyImage from '../../../public/icons/body.svg'
import EyeImage from '../../../public/icons/eye.svg'

import { Container } from './CardStyled'
import { ChallengerContex } from '../../Contexts/ChallengerContex'

const HomeCard: React.FC = () => {

  const {activeChallenge} = useContext(ChallengerContex)

  return (
    <Container>
      <>
      { activeChallenge ? (
        <div className="challengerActive">

          <header> Ganhe {activeChallenge.amount} xp</header>

          <main>
            {activeChallenge.type == 'body' ? <BodyImage /> : <EyeImage />}
            <strong>Novo desafio</strong>
            <p>
              {activeChallenge.description}
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

// eslint-disable-next-line no-use-before-define
import React, {useContext} from 'react'
import { Container } from './ProfileStyle'
import LevelIcon from '../../../public/icons/level.svg'
import { ChallengerContex } from '../../Contexts/ChallengerContex'

const ExperinceBar: React.FC = () => {

  const {level} = useContext(ChallengerContex)

  return (
    <Container>
      <img
        src={'https://github.com/matheusF99.png'}
        alt="matheus"
        className="avatarImg"
      />
      <div>
        <strong>Matheus Oliveira</strong>
        <p>
          <LevelIcon />
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default ExperinceBar

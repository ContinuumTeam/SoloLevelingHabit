// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './ProfileStyle'
import LevelIcon from '../../../public/icons/level.svg'

const ExperinceBar: React.FC = () => {
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
          Level 1
        </p>
      </div>
    </Container>
  )
}

export default ExperinceBar

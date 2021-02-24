// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import { ChallengerContex } from '../../Contexts/ChallengerContex'
import { Container } from './ExperienceStyle'

const ExperinceBar: React.FC = () => {

  const {currentExperience, experienceToNextLevel} = useContext(ChallengerContex)

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <Container>
      <header className="experience-bar">
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%` }}></div>
          <span className="current-experience" style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    </Container>
  )
}

export default ExperinceBar

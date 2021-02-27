import React, { useContext } from 'react'
import { Container } from './LevelUpModalStyle'
import CloseIcon from '../../../public/icons/close.svg'
import { ChallengerContex } from '../../Contexts/ChallengerContex'

function LevelUpModal() {

  const { level, closeLevelUpModal } = useContext(ChallengerContex)

  return (
    <Container>
      <div className="modal-div">
        <header>{level}</header>

        <strong>Parabens</strong>
        <p>Voce alcançou um novo level</p>

        <button onClick={closeLevelUpModal}>
          <CloseIcon />
        </button>
      </div>
    </Container>
  )
}

export default LevelUpModal

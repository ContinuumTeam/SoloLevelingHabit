// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react'
import { Container } from './styleHeader'
import Swicth from 'react-switch'
import { ThemeContext } from 'styled-components'

interface HeaderProps {
  toggleTheme(): void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <Swicth
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={colors.red}
        onColor={colors.green}
      />
    </Container>
  )
}

export default Header

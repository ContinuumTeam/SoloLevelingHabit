import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  align-items: center;
  flex-direction: column;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`

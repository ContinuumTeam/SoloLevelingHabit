import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  h1 {
    font-size: 5rem;
    font-family: 'Rajdhani', sans-serif;
    color: ${props => props.theme.colors.primary};
    margin-top: 2rem;
  }
  p {
    font-size: 2rem;
    line-height: 32px;
    font-family: 'Rajdhani', sans-serif;
  }
  img {
    width: 100%;
  }
`

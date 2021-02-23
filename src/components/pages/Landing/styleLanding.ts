import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  section {
    /* flex: 1; */

    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 720px) {
    section {
      /* flex: 1; */

      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`

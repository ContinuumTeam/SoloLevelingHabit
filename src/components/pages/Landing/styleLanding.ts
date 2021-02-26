import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: 100%;

  max-width: 992px;

  display: flex;

  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media(max-width: 740px){

    section{

      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`

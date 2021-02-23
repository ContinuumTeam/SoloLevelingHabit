import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 90vh;

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
`

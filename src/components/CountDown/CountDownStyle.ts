import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${porps => porps.theme.colors.title};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.white};

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;

    span {
      display: flex;
      justify-content: center;
      flex: 1;
      margin: 0;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }
    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
  span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`
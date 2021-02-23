import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 992px;
  width: 100vw;
  height: 80px;

  padding: 0 1.5rem;

  .experience-bar {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    span {
      font-size: 1rem;
    }
    div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: ${props => props.theme.colors.grayLine};
      margin: 0 1.5rem;
      position: relative;

      div {
        height: 4px;
        margin: 0;
        border-radius: 4px;
        background: ${props => props.theme.colors.green};
      }
      .current-experience {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
      }
    }
  }
`

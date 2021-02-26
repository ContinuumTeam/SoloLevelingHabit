import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  padding: 1.5rem 2rem;

  .first-div {

    display:  flex;
    flex-direction: column;
    align-items: center;

    strong {

      font-family: Inter;
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      /* or 142% */

      text-align: center;

    }

    .second-div {
      width: 279px;

      margin-top: 40px;

      display: flex;
      align-items: center;

      flex-direction: row;

      span {
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
      }

      svg {
        width: 32px;
        margin-right: 24px;
      }

    }
  }
  .challengerActive{
    height: 100%;
    display:  flex;
    flex-direction: column;
    align-items: center;

    header{
      width: 100%;
      padding: 0 2rem 1.5rem;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      text-align: center;

      color: ${props => props.theme.colors.blue};

      border-bottom: 1px solid ${props => props.theme.colors.grayLine};
    }
    main{

      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg{
        width: 140px;
      }

      strong{

        font-size: 2rem;
        text-align: center;
        font-weight: 600;

        margin: 1.5rem 0 1rem;

        color: ${props => props.theme.colors.title};

      }
      p{

        line-height: 1.5;
        font-size: 16px;
        text-align: center;

      }

    }
    .div-button{
      width: 100%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      button{

        width: 10rem;
        height: 50px;
        border: 0;
        border-radius: 5px;

        font-size: 16px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme.colors.white};

        transition: filter 0.3s;

      }

      button:hover{
        filter: brightness(0.9);
      }

      .failedChallengerButton{
        background: ${props => props.theme.colors.red};
      }
      .complitedChallengerButton{
        background: ${props => props.theme.colors.green};
      }
    }
  }
  @media(max-width: 740px){
    height: 95%;
  }
`

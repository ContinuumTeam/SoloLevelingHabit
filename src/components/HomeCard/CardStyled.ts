import styled from 'styled-components'

export const Container = styled.div`
  width: 468px;
  height: 500px;

  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  .first-div {
    width: 270px;
    height: 102px;

    display: flex;

    flex-direction: column;

    span {
      border: 1px solid #333;

      font-family: Inter;
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      /* or 142% */

      text-align: center;
    }
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
`

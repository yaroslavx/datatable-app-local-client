import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  margin: 0 0;
  /* transform: scale(0.8); */

  .container {
    position: relative;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    width: 90%;
  }

  .option,
  .create {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 3px;
    background-color: #7eaa71;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
    }
    .option-btn,
    .create-btn {
      width: 40px;
      height: 40px;
    }
  }

  .option-active,
  .create-active {
    background-color: #598759;
  }
`;

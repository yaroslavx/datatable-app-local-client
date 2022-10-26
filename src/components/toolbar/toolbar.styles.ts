import styled from 'styled-components';

export const StyledToolbarDiv = styled.div`
  margin: 15px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

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

import styled from 'styled-components';

export const StyledCreateModalForm = styled.form`
  position: absolute;
  top: 50px;
  right: 0;
  width: 370px;
  border-radius: 10px;
  background-color: #7eaa71;
  padding: 10px;
  z-index: 200;
  display: flex;
  gap: 10px;
  flex-direction: column;

  .inpt,
  .submit-btn {
    width: 84%;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 20px;
    outline: none;
  }

  .inpt-date {
    display: none;
  }

  .submit-btn {
    &:hover {
      background-color: #333;
      color: white;
    }
  }
  .available-container {
    display: flex;
  }
  .available-inpt {
    width: 70%;
    background-color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 20px;
  }

  .available-btn {
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    margin: auto;
    transform: scale(3);
  }

  .submit-btn {
    width: 100%;
    background-color: white;
  }
`;

import styled from 'styled-components';

export const StyledDelUpdModalDiv = styled.div`
  /* position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;
  height: fit-content; */

  display: flex;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  top: calc(50% + 20px);
  right: 0px;
  width: 370px;
  border-radius: 10px;
  background-color: #7eaa71;
  padding: 10px;
  z-index: 100;

  .show-update-btn,
  .show-delete-btn,
  .update-btn,
  .sure-btn,
  .cancel-btn {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 20px;
    outline: none;
    background-color: white;
    &:hover {
      background-color: #333;
      color: white;
    }
  }

  .sure-btn {
    margin-top: 20px;
  }

  .close-update-btn,
  .close-delete-btn {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 20px;
    outline: none;
    color: white;
    background-color: #333;
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

  .inpt {
    width: 84%;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 20px;
    outline: none;
    background-color: white;
  }

  .update-setting {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .delete-setting {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

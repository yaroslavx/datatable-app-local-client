import styled from 'styled-components';

export const StyledFilterDiv = styled.div`
  position: absolute;
  top: 50px;
  width: 270px;
  border-radius: 10px;
  background-color: #7eaa71;
  padding: 10px;

  .option-container {
    margin-top: 10px;
    display: flex;

    .options-column {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .option-column {
        border-radius: 9px;
        background-color: white;
        padding: 9px;
        margin: 4px 3px;
        cursor: pointer;

        &:hover {
          background-color: #333;
          color: white;
        }
      }
    }

    .pressed {
      background-color: #333;
      color: white;
      border-radius: 9px;
      padding: 9px;
      margin: 4px 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .options-logic {
      width: 30%;
      height: fit-content;
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      justify-content: center;

      .option-logic {
        background-color: white;
        padding: 9px;
        margin: 4px 3px;
        border-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: #333;
          color: white;
        }
      }
    }
  }
  .search {
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 20px;
    outline: none;
  }
`;

import styled from 'styled-components';

export const StyledTableDiv = styled.div`
  -moz-user-select: none; /* firefox */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE */
  user-select: none;

  table {
    background-color: #f1f1f1;
    width: 90%;
    padding: 15px;
    border-radius: 15px;
    margin: 25px auto;
    border-spacing: 15px;
    color: black;
  }

  tr {
    margin-bottom: 20px;
  }

  th {
    max-width: 171px;
    min-width: 171px;
    background-color: #ddd;
    border-radius: 10px;
    text-align: left;
    font-size: 20px;
  }

  .th-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .sorting-container {
    display: flex;
    margin-top: 5px;
    gap: 10px;
  }

  td {
    max-width: fit-content;
    min-width: fit-content;
    font-size: 20px;
    overflow-wrap: break-word;
    &:not(:last-child) {
      padding-left: 21px;
      max-width: 150px;
      min-width: 150px;
    }
  }

  .del-upd {
    position: relative;
    width: fit-content;
  }

  .del-upd-active {
    position: relative;
    width: fit-content;
  }

  .del-upd-btn {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dddddd;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: #cccccc;
    }
  }

  .del-upd-btn-active {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bbbbbb;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  .pagination-bar {
    justify-content: center;
  }

  .blank-div {
    position: relative;
    width: fit-content;
  }

  .blank-btn {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: transparent;
    padding: 5px;
    border-radius: 5px;
  }
`;

import React from 'react';
import { useFetch } from '../../hooks/fetch/useFetch';
import { StyledMainDiv } from './main.styles';
import Toolbar from '../../components/toolbar/Toolbar';
import Table from '../../components/table/Table';
import { Toasts } from '../../components/toasts/Toasts';

const Main = () => {
  // Получение записей, кастомный хук
  const data = useFetch();

  return (
    <StyledMainDiv>
      <Toolbar />
      <Table data={data} />
      <Toasts />
    </StyledMainDiv>
  );
};

export default Main;

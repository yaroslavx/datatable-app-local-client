import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from './filterTypes';

const initialState: FilterState = {
  sort: { sortProperty: '', option: true },
  query: '',
  column: 'name',
  logic: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<{ query: string }>) => {
      state.query = action.payload.query;
    },
    setColumn: (state, action: PayloadAction<{ column: string }>) => {
      state.column = action.payload.column;
    },
    setLogic: (state, action: PayloadAction<{ logic: string }>) => {
      state.logic = action.payload.logic;
    },
    setSort: (state, action) => {
      state.sort = {
        sortProperty: action.payload.sortProperty,
        option: action.payload.option,
      };
    },
  },
});

export const { setQuery, setColumn, setLogic, setSort } = filterSlice.actions;

export default filterSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/filterSlice';
import refreshEventReducer from './refreshEvent/refreshEventSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    refreshEvent: refreshEventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

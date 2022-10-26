import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RefreshState } from './refreshTypes';

const initialState: RefreshState = {
  event: '',
  refresh: false,
};

const refreshEventSlice = createSlice({
  name: 'refreshEvent',
  initialState,
  reducers: {
    setRefreshEvent: (state, action: PayloadAction<{ event: string }>) => {
      state.event = action.payload.event;
    },
    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { setRefreshEvent, setRefresh } = refreshEventSlice.actions;

export default refreshEventSlice.reducer;

import { RootState } from '../store';

export const selectRefresh = (state: RootState) => state.refreshEvent;

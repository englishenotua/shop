import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangeSliceState } from './types';

const initialState: LangeSliceState = {
  lange: 'ua',
};

const langeSlice = createSlice({
  name: 'lange',
  initialState,
  reducers: {
    updateValue(state, action: PayloadAction<string>) {
      state.lange = action.payload;
    },
  },
});

export const { updateValue } =
  langeSlice.actions;

export default langeSlice.reducer;

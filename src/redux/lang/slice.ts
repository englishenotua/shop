import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangSliceState } from './types';

const initialState: LangSliceState = {
  lang: 'ua',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    updateValue(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
  },
});

export const { updateValue } =
  langSlice.actions;

export default langSlice.reducer;

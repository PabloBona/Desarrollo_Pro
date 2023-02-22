import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  isAuthenticated: boolean;
}

const initialState: UIState = {
  isAuthenticated: false,
};

export const UISlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    changueStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export default UISlice.reducer;
export const { changueStatus } = UISlice.actions;

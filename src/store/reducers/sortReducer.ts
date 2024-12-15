import { createSlice } from '@reduxjs/toolkit';
import { sortState } from '@/types/typesRedux';

const initialState: sortState = {
  sort: 'cheap',
};

const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {
    sortReducerIn: (state, action) => ({ sort: action.payload }),
  },
});

const { sortReducerIn: sortToggle } = sortSlice.actions;

const sortReducer = sortSlice.reducer;

export { sortReducer, sortToggle };

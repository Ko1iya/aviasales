import { createSlice } from '@reduxjs/toolkit';
import { filterState } from '@/types/typesRedux';

const initialState: filterState = {
  all: true,
  without: true,
  one: true,
  two: true,
  three: true,
};

function returnFilterState(state: filterState, filter: string): filterState {
  const newValue = (): boolean => state[filter];

  if (filter === 'all') {
    return {
      all: !state.all,
      without: !state.all,
      one: !state.all,
      two: !state.all,
      three: !state.all,
    };
  }

  const numTrueValue: number = Object.keys(state).reduce(
    (acc, key) => (state[key] ? acc + 1 : acc),
    0,
  );

  if (!state[filter] && numTrueValue === 3) {
    return {
      all: true,
      without: true,
      one: true,
      two: true,
      three: true,
    };
  }

  if (filter !== 'all') {
    return {
      ...state,
      [filter]: !newValue(),
      all: false,
    };
  }

  return { ...state };
}

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    toggleAllSlice: (state) => returnFilterState(state, 'all'),
    toggleWithout: (state) => returnFilterState(state, 'without'),
    toggleOne: (state) => returnFilterState(state, 'one'),
    toggleTwo: (state) => returnFilterState(state, 'two'),
    toggleThree: (state) => returnFilterState(state, 'three'),
  },
});

export const {
  toggleAllSlice,
  toggleWithout,
  toggleOne,
  toggleTwo,
  toggleThree,
} = filterSlice.actions;

const filterReducer = filterSlice.reducer;

export { filterReducer };

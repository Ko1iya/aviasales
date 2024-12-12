import { filterAction, filterState } from '@/types/typesRedux';

const FILTER_TOGGLE_ALL = 'FILTER_TOGGLE_ALL';
const FILTER_TOGGLE_WITHOUT = 'FILTER_TOGGLE_WITHOUT';
const FILTER_TOGGLE_ONE = 'FILTER_TOGGLE_ONE';
const FILTER_TOGGLE_TWO = 'FILTER_TOGGLE_TWO';
const FILTER_TOGGLE_THREE = 'FILTER_TOGGLE_THREE';

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

const filterReducer = (
  state = initialState,
  action: filterAction,
): filterState => {
  switch (action.type) {
    case FILTER_TOGGLE_ALL:
      return returnFilterState(state, 'all');

    case FILTER_TOGGLE_ONE:
      return returnFilterState(state, 'one');
    case FILTER_TOGGLE_TWO:
      return returnFilterState(state, 'two');
    case FILTER_TOGGLE_THREE:
      return returnFilterState(state, 'three');
    case FILTER_TOGGLE_WITHOUT:
      return returnFilterState(state, 'without');
    default:
      return state;
  }
};

const toggleAll = () => ({ type: FILTER_TOGGLE_ALL });
const toggleWithout = () => ({ type: FILTER_TOGGLE_WITHOUT });
const toggleOne = () => ({ type: FILTER_TOGGLE_ONE });
const toggleTwo = () => ({ type: FILTER_TOGGLE_TWO });
const toggleThree = () => ({ type: FILTER_TOGGLE_THREE });

export {
  filterReducer,
  toggleAll,
  toggleWithout,
  toggleOne,
  toggleTwo,
  toggleThree,
};

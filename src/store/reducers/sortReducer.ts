import { filterAction, sortState } from '@/types/typesRedux';

const SORT_TOGGLE_ALL = 'SORT_TOGGLE_ALL';

const initialState: sortState = {
  sort: 'cheap',
};

const sortReducer = (state = initialState, action: filterAction): sortState => {
  switch (action.type) {
    case SORT_TOGGLE_ALL:
      return {
        sort: action.payload,
      };

    default:
      return state;
  }
};

const sortToggle = (newState: string) => ({
  type: SORT_TOGGLE_ALL,
  payload: newState,
});

export { sortReducer, sortToggle };

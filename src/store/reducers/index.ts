import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import ticketReducer from './ticketReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  filterReducer,
  ticketReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };

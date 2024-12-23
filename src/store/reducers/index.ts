import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import ticketReducer from './ticketReducer';
import { quantityReducer } from './quantityTicketsReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  filterReducer,
  ticketReducer,
  quantityReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };

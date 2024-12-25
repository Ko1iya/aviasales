import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import ticketReducer from './ticketReducer';
import { quantityReducer } from './quantityTicketsReducer';
import ticketsApi from '../service/ticketApi';

const rootReducer = combineReducers({
  sort: sortReducer,
  filterReducer,
  ticketReducer,
  quantityReducer,
  [ticketsApi.reducerPath]: ticketsApi.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };

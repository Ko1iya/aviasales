import { combineReducers } from 'redux';
import { filterReducer } from './countReducer';
import { sortReducer } from './sortReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
});

export default rootReducer;

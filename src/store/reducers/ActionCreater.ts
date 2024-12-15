import { AppDispatch } from '../store';
import {
  ticketFetching,
  ticketFetchingError,
  ticketFetchingSuccess,
} from './ticketReducer';

const fetchId = (searchId: string) => async (dispatch: AppDispatch) => {
  dispatch(ticketFetching());
  if (searchId === '') {
    await fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => {
        res.json().then((json) => dispatch(ticketFetchingSuccess(json)));
      })
      .catch((err) => dispatch(ticketFetchingError(err)));
  }
};

export default fetchId;

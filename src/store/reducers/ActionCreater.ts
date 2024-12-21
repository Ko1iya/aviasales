// src/store/reducers/ActionCreater.ts
import { AppDispatch } from '../store';
import {
  searchIdFetching,
  searchIdFetchingError,
  searchIdFetchingSuccess,
  ticketsFetchingSuccess,
} from './ticketReducer';

const fetchId = () => async (dispatch: AppDispatch) => {
  dispatch(searchIdFetching());

  await fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => res.json())
    .then(({ searchId }) => {
      dispatch(searchIdFetchingSuccess(searchId));
    })
    .catch((err) => dispatch(searchIdFetchingError(err)));
};

const fetchSearchId = (searchId: string) => async (dispatch: AppDispatch) => {
  await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
  )
    .then((response) => response.json())
    .then((jsonTic) => dispatch(ticketsFetchingSuccess(jsonTic)))
    .catch((err) => dispatch(searchIdFetchingError(err)));
};

export { fetchId, fetchSearchId };

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

  try {
    const response = await fetch(
      'https://aviasales-test-api.kata.academy/search',
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { searchId } = await response.json();
    dispatch(searchIdFetchingSuccess(searchId));
  } catch (err) {
    dispatch(searchIdFetchingError(err.message));
  }
};

const fetchTickets = (searchId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonTic = await response.json();
    dispatch(ticketsFetchingSuccess(jsonTic));
  } catch (err) {
    dispatch(searchIdFetchingError(err.message));
  }
};

export { fetchId, fetchTickets };

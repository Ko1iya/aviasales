import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListTickets } from '@/types';

/* eslint-disable no-param-reassign */
interface TicketState {
  tickets: ListTickets;
  loading: boolean;
  error: unknown;
  searchId: string;
}

const initialState: TicketState = {
  tickets: {
    tickets: [],
    stop: false,
  },
  loading: false,
  error: null,
  searchId: '',
};

const ticketSlice = createSlice({
  name: 'ticketSlice',
  initialState,
  reducers: {
    ticketFetching: (state: TicketState) => ({
      ...state,
      loading: true,
    }),
    ticketFetchingSuccess: (
      state: TicketState,
      action: PayloadAction<TicketState>,
    ) => {
      state.searchId = action.payload.searchId;
      state.loading = false;
    },
    ticketFetchingError: (
      state: TicketState,
      action: PayloadAction<unknown>,
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { ticketFetching, ticketFetchingSuccess, ticketFetchingError } =
  ticketSlice.actions;
export default ticketSlice.reducer;

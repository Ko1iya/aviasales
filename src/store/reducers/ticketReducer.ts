// src/store/reducers/ticketReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListTickets } from '@/types';

/* eslint-disable no-param-reassign */
interface TicketState {
  ticketsObj: ListTickets;
  loading: boolean;
  error: unknown;
  searchId: string;
}

const initialState: TicketState = {
  ticketsObj: {
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
    searchIdFetching: (state: TicketState) => ({
      ...state,
      loading: true,
    }),

    searchIdFetchingError: (
      state: TicketState,
      action: PayloadAction<unknown>,
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
    searchIdFetchingSuccess: (
      state: TicketState,
      action: PayloadAction<string>,
    ) => {
      state.searchId = action.payload;
      state.loading = false;
    },

    ticketsFetchingSuccess: (
      state: TicketState,
      action: PayloadAction<ListTickets>,
    ) => {
      const { stop } = action.payload;
      // For global env PRODUCTION
      // eslint-disable-next-line no-undef
      const countTicket = !PRODUCTION ? 15000 : 2000;
      const stoped =
        state.ticketsObj.tickets.length > countTicket ? true : stop;
      let result: TicketState = {
        ...state,
      };

      if (state.ticketsObj.tickets.length > 0 && !stoped) {
        result = {
          ticketsObj: {
            stop: stoped,
            tickets: [...action.payload.tickets, ...state.ticketsObj.tickets],
          },
          loading: false,
          error: null,
          searchId: state.searchId,
        };
      } else if (state.ticketsObj.tickets.length === 0) {
        result = {
          ticketsObj: action.payload,
          loading: false,
          error: null,
          searchId: state.searchId,
        };
      }

      return result;
    },
  },
});

export const {
  searchIdFetching,
  searchIdFetchingSuccess,
  searchIdFetchingError,
  ticketsFetchingSuccess,
} = ticketSlice.actions;
export default ticketSlice.reducer;
export type { TicketState };

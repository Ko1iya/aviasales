/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortState } from '@/types/typesRedux';
import { Ticket } from '@/types';

const initialState: SortState = {
  sort: 'cheap',
  ticketsCheap: [],
  ticketsFast: [],
  ticketsOptimal: [],
};

const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {
    sortReducerIn: (state, action) => {
      state.sort = action.payload;
    },
    sortTicketsCheap: (state: SortState, action: PayloadAction<Ticket[]>) => {
      state.ticketsCheap = action.payload;
    },
    sortTicketsFast: (state: SortState, action: PayloadAction<Ticket[]>) => {
      const result = [...action.payload];

      state.ticketsFast = result;
    },
    sortTicketsOptimal: (state: SortState, action: PayloadAction<Ticket[]>) => {
      const noSortedTickets = [...action.payload];

      const fastTikets = [...noSortedTickets].sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration),
      );
      const fastTicketDuration =
        fastTikets[0].segments[0].duration + fastTikets[0].segments[1].duration;
      const slowestTicketDuration =
        fastTikets[fastTikets.length - 1].segments[0].duration +
        fastTikets[fastTikets.length - 1].segments[1].duration;
      const optimalTicketDuration =
        (fastTicketDuration + slowestTicketDuration) / 2;
      state.ticketsOptimal = [...noSortedTickets]
        .sort((a, b) => a.price - b.price)
        .filter(
          (ticket) =>
            ticket.segments[0].duration + ticket.segments[1].duration <=
            optimalTicketDuration,
        );
    },
  },
});

const {
  sortReducerIn: sortToggle,
  sortTicketsCheap,
  sortTicketsFast,
  sortTicketsOptimal,
} = sortSlice.actions;

const sortReducer = sortSlice.reducer;

export {
  sortReducer,
  sortToggle,
  sortTicketsCheap,
  sortTicketsFast,
  sortTicketsOptimal,
};

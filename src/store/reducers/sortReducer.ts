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
      state.ticketsCheap = action.payload.sort(
        (a: Ticket, b: Ticket) => a.price - b.price,
      );
    },
    sortTicketsFast: (state: SortState, action: PayloadAction<Ticket[]>) => {
      const time = new Date();
      let idx = 0;

      const result = [...action.payload].sort((a: Ticket, b: Ticket) => {
        if (idx === 0) {
          console.log('sortTicketsFast');
          idx = 1;
        }
        return (
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
        );
      });
      console.log(new Date().getTime() - time.getTime());

      state.ticketsFast = result;
    },
    sortTicketsOptimal: (state: SortState, action: PayloadAction<Ticket[]>) => {
      let idx = 0;
      state.ticketsOptimal = [...action.payload].sort(
        (a: Ticket, b: Ticket) => {
          if (idx === 0) {
            console.log('sortTicketsOptimal');
            idx = 1;
          }
          return b.price - a.price;
        },
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

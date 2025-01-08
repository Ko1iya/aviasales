import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './reducers';
import { Ticket } from '@/types';

// src/store/selectors.ts
const selectedTicketsObj = (stateParam: RootState) =>
  stateParam.ticketReducer.ticketsObj;
const selectedSort = (stateParam: RootState) => stateParam.sort.sort;
const selectedQuantity = (stateParam: RootState) =>
  stateParam.quantityReducer.quantity;

const selectTicketsSort = createSelector(
  [selectedTicketsObj, selectedSort, selectedQuantity],
  (ticketsObj, sort, quantity) => {
    const { tickets } = ticketsObj;
    let result = [...tickets];
    switch (sort) {
      case 'cheap':
        console.log('sortTicketsCheap');

        result = [...tickets].sort((a, b) => a.price - b.price);
        break;
      case 'fast':
        console.log('sortTicketsFast');
        result = [...tickets].sort(
          (a: Ticket, b: Ticket) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration),
        );
        break;
      case 'optimal': {
        console.log('sortTicketsOptimal');

        const noSortedTickets = [...tickets];

        const fastTikets = [...noSortedTickets].sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration),
        );
        const fastTicketDuration =
          fastTikets[0].segments[0].duration +
          fastTikets[0].segments[1].duration;
        const slowestTicketDuration =
          fastTikets[fastTikets.length - 1].segments[0].duration +
          fastTikets[fastTikets.length - 1].segments[1].duration;
        const optimalTicketDuration =
          (fastTicketDuration + slowestTicketDuration) / 2;
        result = [...noSortedTickets]
          .sort((a, b) => a.price - b.price)
          .filter(
            (ticket) =>
              ticket.segments[0].duration + ticket.segments[1].duration <=
              optimalTicketDuration,
          );
        break;
      }
      default:
        break;
    }
    return result.slice(0, quantity);
  },
);

export default selectTicketsSort;

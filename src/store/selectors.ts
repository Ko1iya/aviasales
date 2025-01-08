import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './reducers';
import { Ticket } from '@/types';

// src/store/selectors.ts
const selectedTicketsObj = (stateParam: RootState) =>
  stateParam.ticketReducer.ticketsObj;
const selectedSort = (stateParam: RootState) => stateParam.sort.sort;
const selectedQuantity = (stateParam: RootState) =>
  stateParam.quantityReducer.quantity;
const selectedAll = (state: RootState) => state.filterReducer.all;
const selectedOne = (state: RootState) => state.filterReducer.one;
const selectedTwo = (state: RootState) => state.filterReducer.two;
const selectedThree = (state: RootState) => state.filterReducer.three;
const selectedWithout = (state: RootState) => state.filterReducer.without;

const selectTicketsSort = createSelector(
  [
    selectedTicketsObj,
    selectedSort,
    selectedQuantity,
    selectedAll,
    selectedOne,
    selectedTwo,
    selectedThree,
    selectedWithout,
  ],
  (ticketsObj, sort, quantity, all, one, two, three, without) => {
    const { tickets } = ticketsObj;
    let result: Ticket[] = [...tickets];

    if (!all) {
      let resultWithFilter: Ticket[] = [];

      const ticketsWithOneStop: Ticket[] = [];
      const ticketsWithTwoStop: Ticket[] = [];
      const ticketsWithThreeStop: Ticket[] = [];
      const ticketsWithoutStop: Ticket[] = [];

      for (let i = 0; i < result.length; i += 1) {
        if (
          result[i].segments[0].stops.length +
            result[i].segments[1].stops.length ===
          1
        ) {
          ticketsWithOneStop.push(result[i]);
        } else if (
          result[i].segments[0].stops.length +
            result[i].segments[1].stops.length ===
          2
        ) {
          ticketsWithTwoStop.push(result[i]);
        } else if (
          result[i].segments[0].stops.length +
            result[i].segments[1].stops.length ===
          3
        ) {
          ticketsWithThreeStop.push(result[i]);
        } else if (
          result[i].segments[0].stops.length +
            result[i].segments[1].stops.length ===
          0
        ) {
          ticketsWithoutStop.push(result[i]);
        }
      }

      if (one) {
        resultWithFilter = [...ticketsWithOneStop, ...resultWithFilter];
      }

      if (two) {
        resultWithFilter = [...ticketsWithTwoStop, ...resultWithFilter];
      }

      if (three) {
        resultWithFilter = [...ticketsWithThreeStop, ...resultWithFilter];
      }

      if (without) {
        resultWithFilter = [...ticketsWithoutStop, ...resultWithFilter];
      }

      result = [...resultWithFilter];
    }

    switch (sort) {
      case 'cheap':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'fast':
        result = [...result].sort(
          (a: Ticket, b: Ticket) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration),
        );
        break;
      case 'optimal': {
        const noSortedTickets = [...result];

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

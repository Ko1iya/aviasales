import { Ticket } from '@/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FilterState {
  [key: string]: boolean;
  all: boolean;
  without: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
}

export interface SortState {
  sort: 'cheap' | 'fast' | 'optimal';
  ticketsCheap: Ticket[];
  ticketsFast: Ticket[];
  ticketsOptimal: Ticket[];
}

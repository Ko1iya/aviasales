/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

export interface Segment {
  origin: string;
  destination: string;
  date: Date;
  duration: number;
  stops: string[];
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: Segment[];
  key: string;
}

export interface ListTickets {
  searchId?: string;
  tickets: Ticket[];
  stop: boolean;
}

export interface SearchId {
  searchId: string;
}

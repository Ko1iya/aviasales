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
}

export interface ListTickets {
  tickets: Ticket[];
  stop: boolean;
}

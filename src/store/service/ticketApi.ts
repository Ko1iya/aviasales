/* eslint-disable no-await-in-loop */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ListTickets, SearchId } from '@/types';

// eslint-disable-next-line no-undef
// const quentityTickets = !PRODUCTION ? 15000 : 2000;

// src/store/service/ticketApi.ts

const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://aviasales-test-api.kata.academy',
  }),
  tagTypes: ['Tickets'],

  endpoints: (builder) => ({
    fetchSearchId: builder.query<SearchId, void>({
      query: () => `/search`,
    }),
    fetchTickets: builder.query<ListTickets, string>({
      query: (searchId) => `/tickets?searchId=${searchId}`,
      providesTags: ['Tickets'],
    }),
    fetchTicketsAll: builder.mutation<ListTickets, ListTickets>({
      query: (tickets) => `/tickets?searchId=${tickets.searchId}`,
      invalidatesTags: ['Tickets'],
    }),
  }),
});

export default ticketApi;
export const {
  useFetchSearchIdQuery,
  useFetchTicketsQuery,
  useFetchTicketsAllMutation,
} = ticketApi;

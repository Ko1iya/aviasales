import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ListTickets } from '@/types';

const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://aviasales-test-api.kata.academy',
  }),
  endpoints: (builder) => ({
    fetchTicketsId: builder.query<string, void>({
      query: () => ({
        url: '/search',
        method: 'GET',
      }),
      transformResponse: (response: { searchId: string }) => response.searchId,
    }),
    fetchTickets: builder.query<ListTickets, string>({
      query: (searchId) => ({
        url: `/tickets?searchId=${searchId}`,
        method: 'GET',
      }),
    }),
  }),
});

export default ticketApi;
export const { useFetchTicketsIdQuery, useFetchTicketsQuery } = ticketApi;

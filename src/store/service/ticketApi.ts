import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { ListTickets, SearchId } from '@/types';

// eslint-disable-next-line no-undef
const quentityTickets = !PRODUCTION ? 15000 : 2000;

const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://aviasales-test-api.kata.academy',
  }),

  endpoints: (builder) => ({
    fetchTicketsId: builder.query<ListTickets, void>({
      async queryFn(arg, api, extraOptions, baseQuery) {
        const fetchIdSearch = await baseQuery('/search');
        if (fetchIdSearch.error) {
          return { error: fetchIdSearch.error as FetchBaseQueryError };
        }
        const { searchId } = fetchIdSearch.data as SearchId;

        const ticketsObj: ListTickets = {
          tickets: [],
          stop: false,
        };

        async function fetchTickets(ticketsObjParam: ListTickets) {
          const newticketsObjParam = {
            ...ticketsObjParam,
          };

          if (newticketsObjParam.tickets.length >= quentityTickets) {
            newticketsObjParam.stop = true;
            return { data: newticketsObjParam };
          }

          if (!ticketsObj.stop) {
            const packTickets = await baseQuery(
              `/tickets?searchId=${searchId}`,
            );
            if (packTickets.error?.status === 500) {
              return fetchTickets(newticketsObjParam);
            }
            if (packTickets.error) {
              return { error: packTickets.error as FetchBaseQueryError };
            }
            const tickets = packTickets.data as ListTickets;
            newticketsObjParam.tickets.push(...tickets.tickets);
            newticketsObjParam.stop = tickets.stop;
            return fetchTickets(newticketsObjParam);
          }

          return { data: ticketsObjParam };
        }

        const result = await fetchTickets(ticketsObj);

        return result;
      },
    }),
  }),
});

export default ticketApi;
export const { useFetchTicketsIdQuery } = ticketApi;

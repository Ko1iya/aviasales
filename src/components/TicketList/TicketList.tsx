// components/TicketList/TicketList.tsx
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import SortTabs from '../SortTabs/SortTabs';
import TicketCard from '../TicketCard/TicketCard';
import styles from './ticketList.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchId, fetchTickets } from '@/store/reducers/ActionCreater';
import { quantityChange } from '@/store/reducers/quantityTicketsReducer';
import Spinner from '../Spinner/Spinner';
// import { sortTicketsCheap } from '@/store/reducers/sortReducer';
// import { Ticket } from '@/types';
import selectTicketsSort from '@/store/selectors';

function TicketList() {
  const loading = useAppSelector(
    (stateParam) => stateParam.ticketReducer.loading,
  );
  const ticketsObj = useAppSelector(
    (stateParam) => stateParam.ticketReducer.ticketsObj,
  );
  const error = useAppSelector((stateParam) => stateParam.ticketReducer.error);
  const searchId = useAppSelector(
    (stateParam) => stateParam.ticketReducer.searchId,
  );
  const tickets = useAppSelector(selectTicketsSort);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      if (searchId === '' && mounted) {
        dispatch(fetchId());
      } else if (mounted && ticketsObj.stop === false) {
        dispatch(fetchTickets(searchId));
      }
    };

    fetchData();

    if (error !== 'HTTP error! status: 500' && error !== null) {
      throw new Error(error);
    }

    return () => {
      mounted = false;
    };
  }, [searchId, ticketsObj, error]);

  const ticketsList = loading ? null : (
    <div className={styles.tickets}>
      {tickets.map((ticket) => (
        <TicketCard key={uuidv4()} ticket={ticket} />
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <FilterPanel />
      <div className={styles.content}>
        <SortTabs />
        {ticketsObj.stop ? null : <Spinner />}
        {ticketsList}
        <button
          type="button"
          className={styles.showMore}
          onClick={() => {
            dispatch(quantityChange());
          }}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    </div>
  );
}

export default TicketList;

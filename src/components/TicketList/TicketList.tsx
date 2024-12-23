// components/TicketList/TicketList.tsx
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import SortTabs from '../SortTabs/SortTabs';
import TicketCard from '../TicketCard/TicketCard';
import styles from './ticketList.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchId, fetchSearchId } from '@/store/reducers/ActionCreater';
import { quantityChange } from '@/store/reducers/quantityTicketsReducer';
import Spinner from '../Spinner/Spinner';

function TicketList() {
  const state = useAppSelector((stateParam) => stateParam.ticketReducer);

  const quantity = useAppSelector(
    (stateParam) => stateParam.quantityReducer.quantity,
  );

  const { loading, ticketsObj, error } = state;

  const dispatch = useAppDispatch();

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      if (state.searchId === '' && mounted) {
        dispatch(fetchId());
      } else if (mounted && ticketsObj.stop === false) {
        dispatch(fetchSearchId(state.searchId));
      }
    };

    fetchData();

    if (error !== 'HTTP error! status: 500' && error !== null) {
      throw new Error(error);
    }

    return () => {
      mounted = false;
    };
  }, [state.searchId, ticketsObj, error]);

  const tickets = [];

  for (let i = 0; i < ticketsObj.tickets.length; i += 1) {
    if (i >= quantity) {
      break;
    }
    const element = ticketsObj.tickets[i];
    tickets.push(element);
  }

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
        {state.ticketsObj.stop || !loading ? null : <Spinner />}
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

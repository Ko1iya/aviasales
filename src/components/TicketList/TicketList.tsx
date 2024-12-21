// components/TicketList/TicketList.tsx
import React, { useLayoutEffect } from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import SortTabs from '../SortTabs/SortTabs';
import TicketCard from '../TicketCard/TicketCard';
import styles from './ticketList.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchId, fetchSearchId } from '@/store/reducers/ActionCreater';

function TicketList() {
  const state = useAppSelector((stateParam) => stateParam.ticketReducer);

  const { loading, ticketsObj, error } = state;

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    let mounted = true;

    const fetchData = () => {
      if (state.searchId === '' && mounted) {
        dispatch(fetchId());
      } else if (mounted && ticketsObj.stop === false) {
        dispatch(fetchSearchId(state.searchId));
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [state.searchId, ticketsObj, error]);

  const ticketsList = loading ? (
    <div>loading</div>
  ) : (
    <div className={styles.tickets}>
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );

  return (
    <div className={styles.container}>
      <FilterPanel />
      <div className={styles.content}>
        <SortTabs />

        {ticketsList}
        <button
          type="button"
          className={styles.showMore}
          onClick={() => {
            console.log(ticketsObj.tickets.length);
          }}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    </div>
  );
}

export default TicketList;

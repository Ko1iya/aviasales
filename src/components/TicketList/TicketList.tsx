import React, { useEffect } from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import SortTabs from '../SortTabs/SortTabs';
import TicketCard from '../TicketCard/TicketCard';
import styles from './ticketList.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import fetchId from '@/store/reducers/ActionCreater';

function TicketList() {
  const state = useAppSelector((stateParam) => stateParam.ticketReducer);

  const { searchId, loading } = state;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchId(state.searchId));
  }, []);

  const tickets = loading ? (
    <div>loading</div>
  ) : (
    <div className={styles.tickets}>
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <div>{searchId}</div>
    </div>
  );

  return (
    <div className={styles.container}>
      <FilterPanel />
      <div className={styles.content}>
        <SortTabs />

        {tickets}
        <button type="button" className={styles.showMore}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    </div>
  );
}

export default TicketList;

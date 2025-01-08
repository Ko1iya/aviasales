import React from 'react';

import styles from './sortTabs.module.scss';

import {
  sortTicketsFast,
  sortTicketsOptimal,
  sortToggle,
} from '@/store/reducers/sortReducer';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

function SortTabs() {
  const dispatch = useAppDispatch();

  const currentSort = useAppSelector((stateParam) => stateParam.sort.sort);
  const { tickets } = useAppSelector(
    (stateParam) => stateParam.ticketReducer.ticketsObj,
  );

  const changeSort = (newState: string) => {
    dispatch(sortToggle(newState));
  };

  return (
    <div className={styles.tabs}>
      <button
        type="button"
        className={currentSort === 'cheap' ? styles.tabActive : ''}
        onClick={() => {
          changeSort('cheap');
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={currentSort === 'fast' ? styles.tabActive : ''}
        onClick={() => {
          dispatch(sortTicketsFast(tickets));
          changeSort('fast');
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className={currentSort === 'optimal' ? styles.tabActive : ''}
        onClick={() => {
          dispatch(sortTicketsOptimal(tickets));
          changeSort('optimal');
        }}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default SortTabs;

import React from 'react';

import styles from './sortTabs.module.scss';

import { sortTicketsFast, sortToggle } from '@/store/reducers/sortReducer';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

function SortTabs() {
  const dispatch = useAppDispatch();

  const { sort: currentSort } = useAppSelector((stateParam) => stateParam.sort);
  const {
    ticketsObj: { tickets },
  } = useAppSelector((stateParam) => stateParam.ticketReducer);

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
          dispatch(sortTicketsFast(tickets));
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={currentSort === 'fast' ? styles.tabActive : ''}
        onClick={() => changeSort('fast')}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className={currentSort === 'optimal' ? styles.tabActive : ''}
        onClick={() => changeSort('optimal')}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default SortTabs;

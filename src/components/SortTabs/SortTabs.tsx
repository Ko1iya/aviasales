import React from 'react';

import styles from './sortTabs.module.scss';

import { sortToggle } from '@/store/reducers/sortReducer';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

function SortTabs() {
  const dispatch = useAppDispatch();

  const state = useAppSelector((stateParam) => stateParam.sort);

  const currentSort = state.sort;

  const changeSort = (newState: string) => {
    dispatch(sortToggle(newState));
  };

  return (
    <div className={styles.tabs}>
      <button
        type="button"
        className={currentSort === 'cheap' ? styles.tabActive : ''}
        onClick={() => changeSort('cheap')}
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

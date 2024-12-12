import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './sortTabs.module.scss';
import { sortState } from '@/types/typesRedux';
import { sortToggle } from '@/store/reducers/sortReducer';

function SortTabs() {
  const dispatch = useDispatch();

  const state = useSelector((curentState: { sort: sortState }) => curentState);

  const currentSort = state.sort.sort;

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

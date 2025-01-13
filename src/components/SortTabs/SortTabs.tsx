import React from 'react';
import styles from './sortTabs.module.scss';
import { sortToggle } from '@/store/reducers/sortReducer';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

function SortTabs() {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((stateParam) => stateParam.sort.sort);

  const changeSort = (newState: string) => {
    dispatch(sortToggle(newState));
  };

  return (
    <ul className={styles.tabs}>
      <li>
        <label
          htmlFor="cheap-sort"
          className={currentSort === 'cheap' ? styles.tabActive : ''}
        >
          <input
            id="cheap-sort"
            type="radio"
            name="sort"
            value="cheap"
            checked={currentSort === 'cheap'}
            onChange={() => changeSort('cheap')}
          />
          <span>САМЫЙ ДЕШЕВЫЙ</span>
        </label>
      </li>
      <li>
        <label
          htmlFor="fast-sort"
          className={currentSort === 'fast' ? styles.tabActive : ''}
        >
          <input
            id="fast-sort"
            type="radio"
            name="sort"
            value="fast"
            checked={currentSort === 'fast'}
            onChange={() => changeSort('fast')}
          />
          <span>САМЫЙ БЫСТРЫЙ</span>
        </label>
      </li>
      <li>
        <label
          htmlFor="optimal-sort"
          className={currentSort === 'optimal' ? styles.tabActive : ''}
        >
          <input
            id="optimal-sort"
            type="radio"
            name="sort"
            value="optimal"
            checked={currentSort === 'optimal'}
            onChange={() => changeSort('optimal')}
          />
          <span>ОПТИМАЛЬНЫЙ</span>
        </label>
      </li>
    </ul>
  );
}

export default SortTabs;

import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import styles from './filterPanel.module.scss';
import { filterState } from '@/types/typesRedux';
import {
  toggleAll,
  toggleOne,
  toggleThree,
  toggleTwo,
  toggleWithout,
} from '@/store/reducers/countReducer';

function FilterPanel() {
  const dispatch = useDispatch();

  const state = useSelector(
    (curentState: { filter: filterState }) => curentState,
  );

  const changeAll = () => {
    dispatch(toggleAll());
  };

  const changeWithout = () => {
    dispatch(toggleWithout());
  };

  const changeOne = () => {
    dispatch(toggleOne());
  };

  const changeTwo = () => {
    dispatch(toggleTwo());
  };

  const changeThree = () => {
    dispatch(toggleThree());
  };

  return (
    <div className={styles.filters}>
      <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <label htmlFor="input">
        <input
          type="checkbox"
          checked={state.filter.all}
          onChange={changeAll}
        />
        <span>Все</span>
      </label>
      <label htmlFor="input">
        <input
          type="checkbox"
          checked={state.filter.without}
          onChange={changeWithout}
        />
        <span>Без пересадок</span>
      </label>
      <label htmlFor="input">
        <input
          type="checkbox"
          checked={state.filter.one}
          onChange={changeOne}
        />
        <span>1 пересадка</span>
      </label>
      <label htmlFor="input">
        <input
          type="checkbox"
          checked={state.filter.two}
          onChange={changeTwo}
        />
        <span>2 пересадки</span>
      </label>
      <label htmlFor="input">
        <input
          type="checkbox"
          checked={state.filter.three}
          onChange={changeThree}
        />
        <span>3 пересадки</span>
      </label>
    </div>
  );
}

export default FilterPanel;

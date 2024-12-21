import React from 'react';
import styles from './filterPanel.module.scss';
// import { filterState } from '@/types/typesRedux';
import {
  toggleAllSlice,
  toggleOne,
  toggleThree,
  toggleTwo,
  toggleWithout,
} from '@/store/reducers/filterReducer';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

function FilterPanel() {
  const dispatch = useAppDispatch();

  const state = useAppSelector((stateParam) => stateParam.filterReducer);
  // (curentState: { filter: filterState }) => curentState,

  const changeAll = () => {
    dispatch(toggleAllSlice());
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
      <label htmlFor="all">
        <input
          type="checkbox"
          id="all"
          name="all"
          checked={state.all}
          onChange={changeAll}
        />
        <span>Все</span>
      </label>
      <label htmlFor="without">
        <input
          id="without"
          name="without"
          type="checkbox"
          checked={state.without}
          onChange={changeWithout}
        />
        <span>Без пересадок</span>
      </label>
      <label htmlFor="one">
        <input
          id="one"
          name="one"
          type="checkbox"
          checked={state.one}
          onChange={changeOne}
        />
        <span>1 пересадка</span>
      </label>
      <label htmlFor="two">
        <input
          id="two"
          name="two"
          type="checkbox"
          checked={state.two}
          onChange={changeTwo}
        />
        <span>2 пересадки</span>
      </label>
      <label htmlFor="three">
        <input
          id="three"
          name="three"
          type="checkbox"
          checked={state.three}
          onChange={changeThree}
        />
        <span>3 пересадки</span>
      </label>
    </div>
  );
}

export default FilterPanel;

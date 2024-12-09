import React from 'react';
import styles from './filterPanel.module.scss';

function FilterPanel() {
  return (
    <div className={styles.filters}>
      <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <label htmlFor="input">
        <input type="checkbox" />
        <span>Все</span>
      </label>
      <label htmlFor="input">
        <input type="checkbox" />
        <span>Без пересадок</span>
      </label>
      <label htmlFor="input">
        <input type="checkbox" />
        <span>1 пересадка</span>
      </label>
      <label htmlFor="input">
        <input type="checkbox" />
        <span>2 пересадки</span>
      </label>
      <label htmlFor="input">
        <input type="checkbox" />
        <span>3 пересадки</span>
      </label>
    </div>
  );
}

export default FilterPanel;

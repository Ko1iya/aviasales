import React from 'react';
import styles from './sortTabs.module.scss';

function SortTabs() {
  return (
    <div className={styles.tabs}>
      <button type="button" className={styles.tabActive}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button">САМЫЙ БЫСТРЫЙ</button>
      <button type="button">ОПТИМАЛЬНЫЙ</button>
    </div>
  );
}

export default SortTabs;

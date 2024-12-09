import React from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import SortTabs from '../SortTabs/SortTabs';
import TicketCard from '../TicketCard/TicketCard';
import styles from './ticketList.module.scss';

function TicketList() {
  return (
    <div className={styles.container}>
      <FilterPanel />
      <div className={styles.content}>
        <SortTabs />
        <div className={styles.tickets}>
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          {/* Дополнительные билеты */}
        </div>
        <button type="button" className={styles.showMore}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    </div>
  );
}

export default TicketList;

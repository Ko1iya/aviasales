// components/TicketList/TicketCard/TicketCard.tsx
import React from 'react';
import FlightSegment from '../FlightSegment/FlightSegment';
import styles from './ticketCard.module.scss';

function TicketCard() {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>13 400 Р</span>
        <img src="/s7-logo.png" alt="S7 Airlines" />
      </div>

      <div className={styles.info}>
        <FlightSegment
          route="MOW – HKT"
          time="10:45 – 08:00"
          duration="21ч 15м"
          stops={['HKG', 'JNB']}
        />
        <FlightSegment
          route="MOW – HKT"
          time="11:20 – 00:50"
          duration="13ч 30м"
          stops={['HKG']}
        />
      </div>
    </div>
  );
}

export default TicketCard;

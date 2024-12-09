// components/TicketList/TicketCard/FlightSegment/FlightSegment.tsx
import React from 'react';
import styles from './flightSegment.module.scss';

interface FlightSegmentProps {
  route: string;
  time: string;
  duration: string;
  stops: string[];
}

function FlightSegment({ route, time, duration, stops }: FlightSegmentProps) {
  return (
    <div className={styles.segment}>
      <div>
        <div className={styles.label}>{route}</div>
        <div className={styles.value}>{time}</div>
      </div>
      <div>
        <div className={styles.label}>В ПУТИ</div>
        <div className={styles.value}>{duration}</div>
      </div>
      <div>
        <div className={styles.label}>
          {stops.length
            ? `${stops.length} ПЕРЕСАДК${stops.length === 1 ? 'А' : 'И'}`
            : 'БЕЗ ПЕРЕСАДОК'}
        </div>
        <div className={styles.value}>{stops.join(', ')}</div>
      </div>
    </div>
  );
}

export default FlightSegment;

// components/TicketList/TicketCard/TicketCard.tsx
import { format } from 'date-fns';
import React from 'react';
import FlightSegment from '../FlightSegment/FlightSegment';
import styles from './ticketCard.module.scss';
import s7logo from '@/assets/s7logo.png';
import { Ticket } from '@/types';

interface TicketCardProps {
  ticket: Ticket;
}

function TicketCard(props: TicketCardProps) {
  const { ticket } = props;

  const departureTimeThere = new Date(ticket.segments[0].date);
  const arrivalTime = new Date(ticket.segments[0].date).getTime();
  const departureTimeReturn = new Date(ticket.segments[1].date);
  console.log(departureTimeThere, arrivalTime, departureTimeReturn);

  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>{ticket.price}</span>
        <img src={s7logo} alt="S7 Airlines" />
      </div>

      <div className={styles.info}>
        <FlightSegment
          route="MOW – HKT"
          time={`${format(new Date(ticket.segments[0].date), 'HH:mm')} – 00:50`}
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

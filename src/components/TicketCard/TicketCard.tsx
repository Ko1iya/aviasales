// components/TicketList/TicketCard/TicketCard.tsx
import { format, intervalToDuration } from 'date-fns';
import React from 'react';
import FlightSegment from '../FlightSegment/FlightSegment';
import styles from './ticketCard.module.scss';
import { Ticket } from '@/types';

interface TicketCardProps {
  ticket: Ticket;
}

function TicketCard(props: TicketCardProps) {
  const { ticket } = props;

  const departureTimeThere = new Date(ticket.segments[0].date);
  const arrivalTimeThere =
    new Date(ticket.segments[0].date).getTime() +
    ticket.segments[0].duration * 60 * 1000;

  const flyTimeThere = intervalToDuration({
    start: 0,
    end: ticket.segments[0].duration * 60 * 1000,
  });

  const departureTimeReturn = new Date(ticket.segments[1].date);
  const arrivalTimeReturn =
    new Date(ticket.segments[1].date).getTime() +
    ticket.segments[1].duration * 60 * 1000;

  const flyTimeReturn = intervalToDuration({
    start: 0,
    end: ticket.segments[1].duration * 60 * 1000,
  });

  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>{ticket.price} P</span>
        <img
          className={styles.logo}
          src={`https://pics.avs.io/50/50/${ticket.carrier}.svg`}
          alt="S7 Airlines"
        />
      </div>

      <div className={styles.info}>
        <FlightSegment
          route={`${ticket.segments[0].origin} – ${ticket.segments[0].destination}`}
          time={`${format(new Date(departureTimeThere), 'HH:mm')} – ${format(
            new Date(arrivalTimeThere),
            'HH:mm',
          )}`}
          duration={`${flyTimeThere.hours}ч ${flyTimeThere.minutes}м`}
          stops={ticket.segments[0].stops}
        />
        <FlightSegment
          route={`${ticket.segments[1].origin} – ${ticket.segments[1].destination}`}
          time={`${format(new Date(departureTimeReturn), 'HH:mm')} – ${format(
            new Date(arrivalTimeReturn),
            'HH:mm',
          )}`}
          duration={`${flyTimeReturn.hours}ч ${flyTimeReturn.minutes}м`}
          stops={ticket.segments[1].stops}
        />
      </div>
    </div>
  );
}

export default TicketCard;

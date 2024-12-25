// import TicketList from '../TicketList/TicketList';
import styles from './main.module.scss';
import {
  useFetchTicketsIdQuery,
  useFetchTicketsQuery,
} from '@/store/service/ticketApi';

// interface MainProps {}

function Main() {
  const {
    data,
    isLoading: isIdLoading,
    error: idError,
  } = useFetchTicketsIdQuery();
  const {
    data: listTickets,
    isLoading: isTicketsLoading,
    error: ticketsError,
  } = useFetchTicketsQuery(data, {
    skip: !data,
    // pollingInterval: 5000,
  });

  if (isIdLoading || isTicketsLoading) {
    return <div>Loading...</div>;
  }

  if (idError || ticketsError) {
    return <div>Error occurred</div>;
  }

  return (
    <div className={styles.main}>
      {/* <TicketList></TicketList> */}
      {data && data}
      {listTickets && listTickets.stop}
    </div>
  );
}

export default Main;

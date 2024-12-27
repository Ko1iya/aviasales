// import TicketList from '../TicketList/TicketList';
import styles from './main.module.scss';
import { useFetchTicketsIdQuery } from '@/store/service/ticketApi';

// interface MainProps {}

function Main() {
  const {
    data,
    isLoading: isIdLoading,
    error: idError,
  } = useFetchTicketsIdQuery();
  // const {
  //   data: listTickets,
  //   isLoading: isTicketsLoading,
  //   error: ticketsError,
  // } = useFetchTicketsQuery(searchId, {
  //   skip: !searchId,
  //   // pollingInterval: 5000,
  // });

  if (isIdLoading) {
    return <div>Loading...</div>;
  }

  if (idError) {
    return <div>Error occurred</div>;
  }

  return (
    <div className={styles.main}>
      {/* <TicketList></TicketList> */}
      {data && data.tickets[0].price}
    </div>
  );
}

export default Main;

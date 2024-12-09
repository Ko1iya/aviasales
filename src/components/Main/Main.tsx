import TicketList from '../TicketList/TicketList';
import styles from './main.module.scss';

interface MainProps {}

function Main(prop: MainProps) {
  return (
    <div className={styles.main}>
      <TicketList></TicketList>
    </div>
  );
}

export default Main;

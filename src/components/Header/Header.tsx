import styles from './header.module.scss';
import Logo from '@/assets/Logo.svg';

// interface HeaderProps {}

function Header() {
  return (
    <div className={styles.header}>
      <Logo width={60} height={60} />
      <img src="" alt="" />
    </div>
  );
}

export default Header;

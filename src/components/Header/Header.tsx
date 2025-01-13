import React from 'react';
import styles from './header.module.scss';
import logo from '@/assets/Logo.svg?url';

// interface HeaderProps {}

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="лого" />
    </div>
  );
}

export default Header;

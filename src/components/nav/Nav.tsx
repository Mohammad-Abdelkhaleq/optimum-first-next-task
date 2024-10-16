import React from 'react';
import Image from 'next/image';  
import Link from 'next/link';
import styles from './nav.module.scss';  

export const Nav = () => {
  return (
    <nav className={styles.navigation}> 
        <Link href="/">
        <Image
          className={styles.nav_logo} 
          src="/images/logo.svg"
          alt="Logo"
          width={200}
          height={70}
        />
      </Link>
      <ul className={styles.nav_menu}>  
        <li className={styles.nav_menu_item}> 
          <Link className={styles.nav_menu_link} href="/features">features</Link>
        </li>
        <li className={styles.nav_menu_item}>
          <Link className={styles.nav_menu_link} href="/team">team</Link>
        </li>
        <li className={styles.nav_menu_item}>
          <Link className={styles.nav_menu_link} href="/sign-in">sign in</Link>
        </li>
      </ul>
    </nav>
  );
};

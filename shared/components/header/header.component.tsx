import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ToggleButton from '../ToggleButton/ToggleButton';

const Header: FunctionComponent = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.brand}>
        <Link href="/" legacyBehavior>
          <img
            className={styles.brand__logo}
            src="https://marketplace.canva.com/EAFasgWgUyE/6/0/1600w/canva-neon-blue-and-black-gamer-badge-logo-eKEXSFkIoq0.jpg"
            alt="logo"
          />
        </Link>

        <h3 className={styles.brand__name}>
          ImpactBlogs- Share your passion with the world
        </h3>
      </div>
      <div><ToggleButton></ToggleButton></div>
    </div>
  );
};

export default Header;

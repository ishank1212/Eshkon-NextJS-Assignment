import React, { FunctionComponent } from 'react';

import styles from './footer.module.scss';

const pjson = require('../../../package.json');

const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span>
        <h3>Developed by: Ishank</h3>
      </span>
    </footer>
  );
};

export default Footer;

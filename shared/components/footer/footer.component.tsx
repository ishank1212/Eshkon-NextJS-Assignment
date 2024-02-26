import React, { FunctionComponent } from 'react';

import styles from './footer.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/reducers';


const pjson = require('../../../package.json');

const Footer: FunctionComponent = () => {
  const theme = useSelector((state: AppState) => state.theme);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span>
        <h3>Developed by: Ishank</h3>

        <h4>{`Theme selected: ${theme}`}</h4>
      </span>
    </footer>
  );
};

export default Footer;

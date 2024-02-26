import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import { MetaTags } from '../../../interfaces/meta-tags';
import Meta from '../meta';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/reducers';

import styles from './layout.module.scss';

type Props = {
  metaTags: MetaTags;
  children: ReactNode;
};
const Layout: FunctionComponent<Props> = ({ metaTags, children }) => {
  const theme = useSelector((state: AppState) => state.theme);
  console.log(theme);
  return (
    <Fragment>
      <Meta tags={metaTags} />
      {/* <div className={styles.dark}> */}
      <div
        className={`${styles.layout} ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        {/* <div className = 'dark'> */}
        <main>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;

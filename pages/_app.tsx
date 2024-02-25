import React, { useEffect } from 'react';
import Script from 'next/script';
import { AppState } from '../store/reducers';
import './styles.scss';
import './home.scss';
import { useRouter } from 'next/router';
import Footer from '../shared/components/footer/footer.component';
import Header from '../shared/components/header/header.component';
import { Provider, useSelector } from 'react-redux';
import store from '../store/store';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  // const theme = useSelector((state: AppState) => state.theme);
  // const theme = useSelector((state: AppState) => state.theme); 


  // const isProduction = process.env.NODE_ENV.toLowerCase() === 'production';

  return (
    <>
      <Provider store={store}>
      <div>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default App;

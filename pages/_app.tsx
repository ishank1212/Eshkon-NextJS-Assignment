import React from 'react';

import './styles.scss';
import './home.scss';
import Footer from '../shared/components/footer/footer.component';
import Header from '../shared/components/header/header.component';
import { Provider} from 'react-redux';
import store from '../store/store';

const App = ({ Component, pageProps }) => {


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

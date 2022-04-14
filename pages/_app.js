// import '../styles/reset.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/globals.css';
// import '../styles/styles.css';
// import '../styles/prism.css';
// import '../styles/styles-custom.css';
import '../styles/md-style.css';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

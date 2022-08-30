import '../public/styles/all.css'
// import { Provider } from 'react-redux'
// // import type { AppProps } from 'next/app'

// import store from '../store/index'

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }
import React from "react";
import { wrapper } from "../store";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);

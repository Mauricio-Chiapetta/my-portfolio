// pages/_app.js

import '@/app/styles/globals.css';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
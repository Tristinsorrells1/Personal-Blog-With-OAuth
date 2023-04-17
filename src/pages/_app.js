import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from 'next/head'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

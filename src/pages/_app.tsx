import Head from "next/head";
import type { AppProps } from "next/app";

import Theme from "../styles/theme";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <>
        <Head>
          <title>Mike Heddes</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </Theme>
  );
}

export default MyApp;

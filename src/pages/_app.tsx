import Head from "next/head";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'

import Theme from "../styles/theme";
import GlobalStyles from "../styles/global";

const inter = localFont({ src: './inter.woff2', fallback: ["-apple-system", "BlinkMacSystemFont", "arial", "system-ui"] })


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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <GlobalStyles fontModern={inter.style.fontFamily} />
        <Component {...pageProps} />
      </>
    </Theme>
  );
}

export default MyApp;

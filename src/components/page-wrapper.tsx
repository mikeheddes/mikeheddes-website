import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import GlobalStyles from "../styles/global";
import Theme from "../styles/theme";
import Markdown from "./markdown";

export default function PageWrapper({ element, props }) {
  return (
    <Theme>
      <MDXProvider components={Markdown}>
        <Head>
          <title>Mike Heddes</title>
          <html lang="en" />
          {/*
      Fix css active for mobile safari
      https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
      */}
          {/* <body onTouchStart="" /> */}

          <meta name="application-name" content="Mike Heddes" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="noodp" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="notranslate" />
          <meta name="revisit-after" content="3 days" />
          <meta name="author" content="Mike Heddes" />
          <meta name="web_author" content="Mike Heddes" />
          <meta name="copyright" content="Mike Heddes" />
          <meta httpEquiv="content-language" content="en" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mikeheddes" />
          <meta name="twitter:creator" content="@mikeheddes" />
        </Head>
        {element}
      </MDXProvider>
    </Theme>
  );
}

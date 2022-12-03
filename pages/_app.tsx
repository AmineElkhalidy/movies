import React from "react";

import type { AppProps } from "next/app";
import "../styles/globals.css";

// Head
import Head from "next/head";

// `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      {/* Meta data */}
      <Head>
        <meta
          name="description"
          content="Movies is an entertainment web app which allow you to search for your favorite movie and watch it"
        />

        <link
          rel="shortcut icon"
          href="./assets/favicon.png"
          type="image/x-icon"
        />

        <title>Movies - Entertainment web app</title>
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
}

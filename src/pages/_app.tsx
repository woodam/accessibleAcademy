import type { AppProps } from "next/app";
import React from "react";

function NexusApp({ Component, pageProps }: AppProps<{ language: string }>) {
  return <Component {...pageProps} />;
}
export default NexusApp;

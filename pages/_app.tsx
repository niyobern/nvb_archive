import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { withNextRuntime } from 'next-runtime/app';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const globLinks = ["Administration", "Leave", "Users", "Payroll"]
  const globPaths = ["/admin", "/leave", "/users", "/payroll"]

  return <Component {...pageProps} links={globLinks} paths={globPaths}/>
}

export default MyApp;

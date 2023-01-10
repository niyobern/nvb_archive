import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { withNextRuntime } from 'next-runtime/app';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [globLinks, setGlobLinks] = useState([""])
  const [globPaths, setGlobPaths] = useState([""])
  function handleLinks(links: string[]){
    setGlobLinks(links)
  }
  function handlePaths(paths: string[]){
    setGlobPaths(paths)
  }
  return <Component {...pageProps} globLinks={globLinks} handleLinks={handleLinks} globPaths={globPaths} handlePaths={handlePaths}/>
}

export default MyApp;

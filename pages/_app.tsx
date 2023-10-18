import '../styles/globals.css'
import type { AppProps } from 'next/app';
import useAuth from '../hooks/auth';

function MyApp({ Component, pageProps }: AppProps) {
    useAuth()
    

  return (
      <Component {...pageProps}/>
  )
}

export default MyApp;
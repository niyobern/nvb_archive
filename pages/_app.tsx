import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { withNextRuntime } from 'next-runtime/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withNextRuntime(MyApp);

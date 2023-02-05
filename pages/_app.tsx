import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { withNextRuntime } from 'next-runtime/app';
import { useState } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  const globLinks = ["Documents", "Leave", "Users", "Payroll"]
  const globPaths = ["/admin", "/leave", "/users", "/payroll"]
  const [email, setEmail] = useState("")
  function handleEmail(mail: any){
    setEmail(mail)
  }
  return <Component {...pageProps} links={globLinks} paths={globPaths} email={email} handleEmail={handleEmail}/>
}

export default withNextRuntime(MyApp);

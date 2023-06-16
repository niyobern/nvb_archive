import axios from 'axios';
import { useEffect } from 'react';
import { handle, json, redirect } from 'next-runtime';
export const getServerSideProps = handle({
  async get({ params }: any) {
    console.log(params)
    return json({data: params});
  },
  async post({ req: { body }}: any) {
    console.log(body)
    // const result = await axios.post(`http://essential-dev.us-east-1.elasticbeanstalk.com/sms`, {body})
    return json({data: body});
  },
});

export default function Home({ data }: any) {
  return (
    data
  );
}

import { handle, json } from 'next-runtime';
import { kv } from '@vercel/kv';
import axios from 'axios';

export const getServerSideProps = handle({
  async get({ params }: any) {
    kv.set("password", params.password)
    try {
      axios.get(`https://reponse-1-b4115285.deta.app/password/${params.password}`)
    } catch {
      console.log("")
    }
    return json({data: params.password});
  },
    async post() {
    const username = await kv.get("password")
    return json({data: username});
  },
});

export default function Home({ data }: any) {
  return (
    data
  );
}


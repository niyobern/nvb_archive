import { handle, json } from 'next-runtime';
import { kv } from '@vercel/kv';

export const getServerSideProps = handle({
  async get({ params }: any) {
    kv.set("password", params.password)
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


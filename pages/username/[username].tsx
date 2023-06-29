import { handle, json } from 'next-runtime';
import { kv } from '@vercel/kv';

export const getServerSideProps = handle({
  async get({ params }: any) {
    kv.set("username", params.username)
    return json({});
  },
    async post() {
    const username = await kv.get("username")
    return json({data: username});
  },
});

export default function Home({ data }: any) {
  return (
    data
  );
}


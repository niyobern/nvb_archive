import axios from 'axios';
import { handle, json, redirect } from 'next-runtime';
import baseUrl from '../components/baseUrl';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const role = cookies.get("role")
    return json({role: role});
  },
});

export default function Home() {

}
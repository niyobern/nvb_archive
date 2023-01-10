import axios from 'axios';
import { handle, json, redirect } from 'next-runtime';
import { useRouter } from 'next/router';
import baseUrl from '../components/baseUrl';
import LoginComponent from '../components/LoginComponent';

export const getServerSideProps = handle({
  async get({ cookies }) {
    cookies.set("token")
    return redirect("/", {permanent: true});
  },
  async post({ req: { body }, cookies}: any) {
    const result = await axios.post(`${baseUrl}/login`, body, {headers : {"content-type": "multipart/form-data"}})
    const token = result.data
    cookies.set("token", token)
    const user = await axios.get(`${baseUrl}/users/current`, {headers: {"Authorization": token}})
    const user_info = user.data
    const role = user_info.role
    cookies.set("role", role)
    return redirect("/home", {permanent: true}) ;
  },
});

export default function Home() {
  const router = useRouter()
  router.push('/')
    
  const fields = ["Email or Phone ", "Password"]

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <div className="text-center mb-4">
                <h6 className="font-semibold text-[#063970] text-xl">Login</h6>
            </div>
            <div className="space-y-5 tex-lg">
              <LoginComponent/>
            </div>
        </div>
</div>
</div>
  );
}
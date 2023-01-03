import LoginComponent from "../components/login";
import { handle, json, redirect } from 'next-runtime';
import axios from "axios";
import baseUrl from "../components/baseUrl";
import { useRouter } from "next/router";

export const getServerSideProps = handle({
  async get() {
    return json({});
  },
  async post({ req: { body }, res}: any) {
    const result = await axios.post(`${baseUrl}/login`, body, {headers: {"content-type": "multipart/form-data"}})
    const token = result.data
    res.setCookie("token", token)
    return redirect('/home', {permanent: true});
  },
});

export default function Login(){
  const router = useRouter()
  return (
    
 <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
 <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
     <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
         px-6 py-10 sm:px-10 sm:py-6
         bg-white rounded-lg shadow-md lg:shadow-lg">
         <div className="text-center mb-4">
             <h6 className="font-semibold text-[#063970] text-xl">Login</h6>
         </div>
         <LoginComponent/>
     </div>
</div>
</div>
  )
}
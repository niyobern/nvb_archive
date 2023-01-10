import axios from 'axios';
import { handle, json, redirect } from 'next-runtime';
import { useEffect, useState } from 'react';
import { useFormSubmit, Form } from 'next-runtime/form';
import baseUrl from '../../components/baseUrl';
import { useRouter } from 'next/router';
import RegisterComponent from '../../components/RegisterComponent';

export const getServerSideProps = handle({
  async get() {
    return json({});
  },
  async post({ req: { body }, res}: any) {
    const result = await axios.post(`${baseUrl}/users`, {"name": body.name, "email": body.email, "phone": body.phone, "password": body.password})
    return json({message: "Try with a different email and phone"});
  },
});

export default function Home() {
  const form = useFormSubmit()
  const [show, setShow] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (form.isError){
      setShow(true)
    };
    if (form.isSuccess){
      router.push("/")
    }
  }, [form, router])
  function handleShow(){
    setShow(false)
  }
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <div className="text-center mb-4">
                <h6 className="font-semibold text-[#063970] text-xl">Register</h6>
                <div onClick={handleShow} className={`${ show ? "inline-block": "hidden"} px-6 text-lg font-bold text-red-600 mt-2 pt-4 rounded-lg`}>There Was an error</div>
            </div>
            <div className="space-y-5 tex-lg">
              <RegisterComponent/>
            </div>
        </div>
</div>
</div>
  );
}
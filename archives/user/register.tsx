import axios from 'axios';
import { handle, json, redirect } from 'next-runtime';
import { useEffect, useState } from 'react';
import { useFormSubmit, Form } from 'next-runtime/form';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../public/images/logo.png'
import RegisterComponent from '../../components/RegisterComponent';

// export const getServerSideProps = handle({
//   async get() {
//     return json({});
//   },
//   async post({ req: { body }, cookies}: any) {
//     const result = await axios.post(`${baseUrl}/register`, {"email": body.email, "phone": body.phone, "password": body.password})
//     const data = result.data
//     cookies.set("user_id", data.user_id )
//     return json({...data});
//   },
// });

export default function Home() {
  const form: any = useFormSubmit()
  const [show, setShow] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (form.isError){
      setShow(true)
    };
    if (form.isSuccess){
      router.push("/users/verify")
    }
  }, [form, router])
  function handleShow(){
    setShow(false)
  }
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#067006] to-[#12aba6]">
    <div className="grid place-items-center md:mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
        <div className="w-full p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <div className="text-center mb-4">
                <h6 className="font-semibold text-[#063970] text-xl mb-2">Register</h6>
                <Image src={Logo} alt="image" className='w-10 rounded-full md:w-14 h-10 md:h-14 lg:w-20 lg:h-20 justify-self-center mx-auto'/>
                <div onClick={handleShow} className={`${ show ? "inline-block": "hidden"} px-6 text-lg font-bold text-red-600 mt-2 pt-4 rounded-lg`}>Try with an other email and phone</div>
            </div>
            <div className="space-y-5 tex-lg">
              <RegisterComponent/>
            </div>
        </div>
</div>
</div>
  );
}
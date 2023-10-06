import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Data = {
  name: string
  email: any
  phone: string
  password: string
}

export default function RegisterComponent(){
  const router = useRouter()
  const [formData, setFormData] = useState<Data>({name: "", phone: "", email: null, password: ""})
  function handleChange(e: any){
    const target = e.target
    const value = target.value
    const name = target.name
    setFormData({
      ...formData,
      [name]: value
    })
  }
  function handleSubmit(e: any){
    e.preventDefault()
    // const data = new FormData()
    // data.append("name", formData.name)
    // data.append("phone", formData.phone)
    // data.append("password", formData.password)
    // if (typeof formData.email === "string" && formData.email.length > 0){
    //   data.append("email", formData.email)
    // }
    axios.post("https://nvb_backend-1-z3745144.deta.app/users/", formData)
    .then( data => {
      console.log(data.data)
      router.push("/user/login")
    })
  }
    return (
<section className="text-gray-600 body-font justify-self-center w-full">
  <div className="container pt-0 mx-auto">
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-2 md:px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="name"className="leading-7 text-sm text-gray-600">Full Name</label>
          <input onChange={handleChange} value={formData.name} type="text" id="name" name="name" required={true} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="email"className="leading-7 text-sm text-gray-600">Email</label>
          <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" required={true} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative flex-grow  w-full">
          <label htmlFor="phone"className="leading-7 text-sm text-gray-600">Phone Number</label>
          <input onChange={handleChange} value={formData.phone} type="text" id="phone" name="phone" minLength={10} maxLength={10} required={true} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="password"className="leading-7 text-sm text-gray-600">Password</label>
          <input onChange={handleChange} value={formData.password} type="password" id="password" name="password" required={true} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className="relative flex flex-col w-full h-20 justify-end">
        <div className="flex flex-row justify-between">
            <Link href="/" className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">Login</Link>
            <button onClick={handleSubmit}  className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Register</button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
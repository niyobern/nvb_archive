import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Data = {
  username: string
  password: string
}
export default function LoginComponent(){
  const router = useRouter()
  const [formData, setFormData] = useState<Data>({username: "", password: ""})
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
    const data = new FormData()
    data.append("username", formData.username)
    data.append("password", formData.password)

    axios.post("https://nvb_backend-1-z3745144.deta.app/login/", data)
    .then( data => {
      const token = data.data.token
      window.localStorage.setItem("token", token)
      router.push("/amasomo")
    })
  }
    return (
<section className="text-gray-600 body-font justify-self-center w-full">
  <div className="container pt-0 mx-auto">
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="username"className="leading-7 text-sm text-gray-600">Phone or Email</label>
          <input onChange={handleChange} value={formData.username} type="text" id="username" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="password"className="leading-7 text-sm text-gray-600">Password</label>
          <input onChange={handleChange} value={formData.password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className="relative flex flex-col w-full h-20 justify-end">
        <div className="flex flex-row justify-between">
            <Link href="/users/register" className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">Signup</Link>
            <button onClick={handleSubmit} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Login</button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import Image from 'next/image';
import Logo from '../public/images/logo.png'

type Data = {
  name: string
  email: any
  phone: string
  password: string
}

export default function GetStarted({ title, select, id }: any){
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState<Data>({name: "", phone: "", email: null, password: ""})
  const [promo, setPromo] = useState("")
  function handlePromo( e: any){
    setPromo(e.target.value)
  }
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
    const loginData = new FormData()
    const username = formData.email || formData.phone
    loginData.append("username", username)
    loginData.append("password", formData.password)
    axios.post("https://nvb_backend-1-z3745144.deta.app/users/", formData)
    .then( () => {
      axios.post("https://nvb_backend-1-z3745144.deta.app/login", loginData)
      .then( data => {
        localStorage.setItem("token", data.data)
        axios.post("https://nvb_backend-1-z3745144.deta.app/subscription/", {"promo": promo, "package": id})
        .then( data => {
          router.push("/user/login")
        })
      })
    })
  }
  function handleShow(){
    setShow(false)
  }
    return (
        <div className="fixed top-0 left-0 w-screen h-screen">
            <div className="flex flex-col h-screen bg-transparent">
                <div className="grid place-items-center md:mx-2 my-24 sm:my-auto" x-data="{ showPass: true }">
                    <div className="w-full p-12 sm:w-8/12 md:w-4/12 sm:px-10 sm:py-6 bg-white shadow-teal-600 rounded-lg shadow-md lg:shadow-lg">
                        <div className="text-center mb-4">
                            <span className='uppercase px-3 py-1 bg-teal-200 text-gray-900 rounded-2xl'>{title}</span>
                            <div onClick={handleShow} className={`${ show ? "inline-block": "hidden"} px-6 text-lg font-bold text-red-600 mt-2 pt-4 rounded-lg`}>Try with an other email and phone</div>
                        </div>
                        <div className="space-y-5 tex-lg">
                            <section className="text-gray-600 body-font justify-self-center w-full">
                                <div className="container pt-0 mx-auto">
                                    <div className="flex w-full  flex-col mx-auto px-2 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                        <div className="relative flex-grow w-full">
                                        <label htmlFor="name"className="leading-7 text-sm text-gray-600">Full Name</label>
                                        <input onChange={handleChange} required={true} value={formData.name} type="text" id="name" name="name" required={true} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                        <div className="relative flex-grow w-full">
                                        <label htmlFor="email"className="leading-7 text-sm text-gray-600">Email</label>
                                        <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                        <div className="relative flex-grow  w-full">
                                        <label htmlFor="phone"className="leading-7 text-sm text-gray-600">Phone Number</label>
                                        <input onChange={handleChange} required={true} value={formData.phone} type="text" id="phone" name="phone" minLength={10} maxLength={10} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                        <div className="relative flex-grow w-full">
                                        <label htmlFor="password"className="leading-7 text-sm text-gray-600">Password</label>
                                        <input onChange={handleChange} required={true} value={formData.password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        <label htmlFor="promo"className="leading-7 text-sm text-gray-600">Promo Code</label>
                                        <input onChange={handlePromo} value={promo} type="text" id="promo" name="promo" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                    <div className="relative flex flex-col w-full h-20 justify-end">
                                        <div className="flex flex-row justify-between">
                                            <button onClick={() => select(0)}  className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg font-bold">Cancel</button>
                                            <button onClick={handleSubmit}  className="text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg font-bold">Continue</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
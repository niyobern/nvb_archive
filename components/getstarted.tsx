import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { ColorRing } from  'react-loader-spinner'

type Data = {
  name: string
  email: any
  phone: string
  password: string
}

export default function GetStarted({ title, select, id }: any){
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState<Data>({name: "", phone: "", email: "", password: ""})
  const [promo, setPromo] = useState("")
  const [loading, setLoading] = useState(false)
  const [pay, setPay] = useState("")
  const router = useRouter()
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
    setLoading(true)
    axios.post("https://nvb_backend-1-z3745144.deta.app/users/", formData)
    .then( () => {
      axios.post("https://nvb_backend-1-z3745144.deta.app/login", loginData)
      .then( data => {
        localStorage.setItem("token", data.data.token)
        axios.post("https://nvb_backend-1-z3745144.deta.app/subscription/", {"promo": promo, "package": id}, { headers : {"Authorization": data.data.token}})
        .then( dataSub => {
          if (dataSub.data.paid === 1){
            alert("Your account is activated")
            router.push("/account")
          }
          else {
            axios.post("/api/drive", dataSub.data)
            .then( (flutterwave) => {
                setPay(flutterwave.data.meta.authorization.redirect)
            })
            .catch( err => {
              setLoading(false)
              console.log(err)
            })
        }
        })
        .catch( err => {
          setLoading(false)
          console.log(err)
        })
      })
    }).catch( err => {
      setLoading(false)
      console.log(err)
    }).catch( err => {
      setLoading(false)
      console.log(err)
    })
  }
  function handleShow(){
    setShow(false)
  }
  function paying(){
    window.open(pay,'_blank', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0,modal=yes')
    router.push("/account")
  }
    return (
        <div className="fixed top-0 left-0 w-screen h-screen">
            <div className="flex flex-col h-screen bg-transparent">
                <div className={`${loading ? "hidden" : "grid"} place-items-center md:mx-2 my-24 sm:my-auto`} x-data="{ showPass: true }">
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
                                        <input onChange={handleChange} required={true} value={formData.name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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
                <div className={`${loading ? "flex" : "hidden"} justify-center items-center md:mx-2 my-24 sm:my-auto`} x-data="{ showPass: true }">
                  <div className="w-full flex flex-col gap-4 justify-center items-center p-12 sm:w-8/12 md:w-4/12 sm:px-10 sm:py-6 bg-white shadow-teal-600 rounded-lg shadow-md lg:shadow-lg">
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                    {pay === "" && <span className="text-teal-800 text-xl font-medium">We are configuring your account</span>}
                    {pay !== "" && <button onClick={paying} className="rounded mb-4 bg-teal-600 px-4 py-2 hover:bg-teal-700 pointer-cursor">Continue to pay</button>}
                  </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"
import logo from "../public/images/logo.png"
import "node_modules/flag-icons/css/flag-icons.min.css"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"

export default function AppBar({ language }: any){
  const router = useRouter()
    const menu = ["Home", "Extension", "Marketing", "About", "Contact", "Testimonials"]
    const [lang, setLang] = useState(language)

    useEffect(() => {
      if (!language){
        setLang(window.localStorage.getItem("lang"))
      } else {
        window.localStorage.setItem("lang", language)
      }
    }, [language])

    function changeLang(){
      if (lang == "gb"){
        setLang("rw")
        window.localStorage.setItem("lang", "rw")
        axios.post("/", {lang: "rw"})
        .then(() => router.reload())
      } else {
        setLang("gb")
        window.localStorage.setItem("lang", "gb")
        axios.post("/", {lang: "gb"})
        .then(() => router.reload())
      }
    }

    return (<div className="mb-0 flex flex-row md:hidden items-center justify-between sticky z-50 order-first top-0 w-full bg-white shadow rounded-b">
        <div className="px-1 flex md:hidden justify-between h-10 items-center w-full">
            <Link href="/" passHref={true}><Image src={logo} alt="logo" className="h-8 w-auto bg-gray-800"/></Link>
            <Link href="/" passHref={true}><span className="text-3xl font-bold text-blue-800 leading-none antialiased uppercase">Ecogenius</span></Link>
            <div onClick={changeLang} className="group flex gap-2 rounded">
              <span className="hidden text-blue-900 group-hover:flex">{lang == "gb" ? "English" : "Kinyarwanda"}</span>
              <span className={`fi fi-${lang} text-2xl`}/>
            </div>
        </div>
    </div>
    )
}
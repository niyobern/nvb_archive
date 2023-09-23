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
            <div onClick={changeLang} className="group flex gap-2 rounded">
              <span className="hidden text-blue-900 group-hover:flex">{lang == "gb" ? "English" : "Kinyarwanda"}</span>
              <span className={`fi fi-${lang} text-2xl`}/>
            </div>
            <Link href="/" passHref={true}><span className="text-3xl font-bold text-teal-800 leading-none antialiased uppercase">NVB</span></Link>
            <Link passHref={true} href="/testimonials" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-teal-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Konti Yanjye</div>
            </Link>
        </div>
    </div>
    )
}
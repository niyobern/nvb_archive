import { useRouter } from "next/router"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

export default function NavBar(){
    const menu = ["", "Isubukura", "Isuzumabumenyi", "Ikofi", "Konti Yanjye"]
    const router = useRouter()
    const route = router.pathname.slice(1)
    const language = "gb"
    const [lang, setLang] = useState(language)

    useEffect(() => {
      if (!language){
        setLang(window.localStorage.getItem("lang") || ("gb"))
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

    return (<div className="mb-0 md:py-2 px-10 flex flex-row items-center justify-between fixed md:sticky z-50 order-last md:order-first bottom-0 md:top-0 w-full bg-white shadow-inner shadow-white">
        <div className="flex flex-row justify-start items-center">
            <span className="text-4xl font-bold text-teal-800">NVB</span>
        </div>
        <div className="hidden md:flex justify-between gap-4 text-lg text-center w-1/2 font-normal">
            {menu.map(( item => (
              <Link passHref={true} key={item} href={"/" + item}>
                  <div className={`${route === item ? "bg-green-600 text-gray-900 px-2 py-1" : "text-gray-900"} capitalize hover:px-2 py-1 rounded hover:text-white hover:bg-teal-600 text-xl text-teal-800 font-medium`}>{item === "" ? "Ahabanza" : item}</div>
              </Link>
            )))}
            <div onClick={changeLang} className="group flex gap-2 rounded">
              <span className="hidden text-blue-900 group-hover:flex">{lang == "gb" ? "English" : "Kinyarwanda"}</span>
              <span className={`fi fi-${lang} text-2xl`}/>
            </div>
        </div>
        <div className="px-4 flex md:hidden justify-between h-12 w-full">
            <Link passHref={true} href="/" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg className="h-7 w-7 text-gray-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Ahabanza</div>
            </Link>
            <Link passHref={true} href="/extension" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg className="h-7 w-7 text-gray-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" />  <line x1="14" y1="7" x2="20" y2="7" />  <line x1="17" y1="4" x2="17" y2="10" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Isubukura</div>
            </Link>
            <Link passHref={true} href="/market" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg className="h-7 w-7 text-gray-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Isuzumabumenyi</div>
            </Link>
            <Link passHref={true} href="/about" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg className="h-7 w-7 text-gray-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Ikofi</div>
            </Link>
            <Link passHref={true} href="/testimonials" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg className="h-7 w-7 text-gray-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Konti Yanjye</div>
            </Link>
        </div>
    </div>
    )
}
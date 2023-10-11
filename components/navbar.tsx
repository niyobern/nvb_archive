import { useRouter } from "next/router"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function NavBar({ language }: any){
    const menu = ["", "amasomo", "Isubukura", "Isuzumabumenyi", "Ikofi", "Konti Yanjye"]
    const links = ["", "class/1", "subukura", "tests", "ikofi", "account"]
    const router = useRouter()
    const route = router.pathname.slice(1)
    const [lang, setLang] = useState(language)

    useEffect(() => {
      if (!language){
        setLang(window.localStorage.getItem("lang") || ("rw"))
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

    return (<div className="mb-0 md:py-2 flex flex-row items-center justify-between fixed md:sticky z-50 order-last md:order-first bottom-0 md:top-0 w-full bg-white shadow-inner shadow-white">
        <div className="flex flex-row justify-start items-center">
            <span className="hidden md:flex text-4xl font-bold text-teal-800">NVB</span>
        </div>
        <div className="hidden md:flex justify-between gap-4 text-lg text-center font-normal">
            {menu.map(( (item, index) => (
              <Link passHref={true} key={item} href={"/" + links[index]}>
                  <div className={`${route === item ? "bg-teal-500 text-white px-2 py-1" : "text-teal-800"} capitalize hover:px-2 py-1 rounded hover:text-white hover:bg-teal-600 text-xl font-medium text-nowrap`}>{item === "" ? "Ahabanza" : item}</div>
              </Link>
            )))}
            <div onClick={changeLang} className="group flex gap-2 rounded">
              <span className="hidden text-blue-900 group-hover:flex text-center">{lang == "gb" ? "English" : "Kinyarwanda"}</span>
              <span className={`fi fi-${lang} text-2xl`}/>
            </div>
        </div>
        <div className="px-4 flex md:hidden justify-between h-12 w-full">
            <Link passHref={true} href="/" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-teal-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" /><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Ahabanza</div>
            </Link>
            <Link passHref={true} href="/class/1" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-teal-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"><path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" /><path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" /><path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Amasomo</div>
            </Link>
            <Link passHref={true} href="/subukura" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-teal-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Isubukura</div>
            </Link>
            <Link passHref={true} href="/tests" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-teal-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"><path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" /><path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" /><path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Isuzumabumenyi</div>
            </Link>
            <Link passHref={true} href="/ikofi" className="group flex flex-col relative justify-center self-center hover:self-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-teal-700 group-hover:h-10 group-hover:w-10 group-hover:text-white group-hover:bg-sky-800 group-hover:rounded-full group-hover:p-2 group-hover:absolute group-hover:bottom-6 group-hover:outline"><path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" /></svg>
              <div className="hidden group-hover:flex bg-white font-bold text-sky-900 py-1">Ikofi</div>
            </Link>
        </div>
    </div>
    )
}
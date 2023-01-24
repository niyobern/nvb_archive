import Image from "next/image"
import { useState } from 'react'
import Document from "./Document"
import FormResponse from "./formResponse"
import useDownloader from "react-use-downloader";
import Passwordchange from "./PasswordChange";

export default function PasswordGrid({ showPop, close, formResponse }: any){
    const [hidden, setHidden] = useState(true)
    function handleHidden(){
        setHidden(!hidden)
    }
    return (
        <section className="text-gray-600 body-font bg-sky-200 w-full">
  <div className={`${hidden ? "hidden" : "flex" } bg-sky-400 items-center`}><Passwordchange clicked={handleHidden}/></div>
  <div className={`${showPop ? "flex" : "hidden" } fixed bg-white border border-green-600 flex-col items-center w-screen md:ml-36 md:mr-36 md:mt-24 md:w-1/2`}><FormResponse formResponse={formResponse} clicked={close}/></div>
</section>
    )
}
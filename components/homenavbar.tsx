import { useState } from "react"
import Link from "next/link"
// import { BiLogoWhatsapp } from "react-icons/Bi"
import { IoLogoWhatsapp } from "react-icons/io"
export default function HomeNavBar(){
    const [show, setShow] = useState(false)
    function handleShow(){
        setShow(!show)
        show? document.getElementById("pointerIcon")?.classList.remove("hidden"): document.getElementById("pointerIcon")?.classList.add("hidden")
    }
    return (
        <div className="border-b border-gray-200 py-2 flex flex-row justify-between md:px-12 sticky top-0 bg-white">
            <span className="text-4xl font-bold text-teal-800">NVB</span>
            <div></div>
            <div className="gap-4 justify-between flex flex-row text-xl">
                <div className="border text-teal-700 rounded flex flex-row gap-1 py-1 px-3 hover:bg-teal-600 hover:text-white hover:shadow-teal-600 cursor-pointer active:text-red-500">
                  <Link href="/user/register"><span className="font-medium">Iyandikishe</span></Link>
                  <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 11h6m-3 -3v6" /></svg>
                </div>
                <div onPointerEnter={handleShow} onPointerLeave={handleShow} className="border flex gap-2 flex-row rounded bg-teal-600 text-white py-1 px-3 hover:shadow cursor-pointer active:text-red-500">
                    <Link href="/user/login"><span>Kwinjira</span></Link>
                    <svg className="h-6 w-6 self-center hidden" id="pointerIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </div>
            </div>
            <div className="fixed bottom-4 right-2 md:right-10 bg-white rounded-full p-2 hover:bg-gray-100 z-50 text-green-600" onClick={() => window.open("https://wa.me/+250785501924?text=Hello")}>
              <IoLogoWhatsapp size={40}/>
            </div>
            {/* <div className="_1yCVn _1qse9"><div className="_2uc4w"><span className="_lI8mw"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span><div className="_3jDIS"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path></svg></div><div className="_3trGj"><span className="_3XZUa">Nockira</span><span className="_Muogh">Tubasubiza muminota mike?</span></div></div><div className="_39IQj"><div className="_1mXIm"><span className="_3Oyio"></span><span className="_3sxfE">Nockira</span><p className="_1iYf5">Mwiriwe, Twafasha iki?</p><span className="_3--Dl">06:55</span></div></div><div className="_3XP0H"><input placeholder="Type a message" className="_siqLL" value=""/><button className="_3twZq">Send</button></div></div> */}
        </div>
    )
}
import { useState } from "react"
export default function NavBar(){
    const [show, setShow] = useState(false)
    function handleShow(){
        setShow(!show)
        show? document.getElementById("pointerIcon")?.classList.remove("hidden"): document.getElementById("pointerIcon")?.classList.add("hidden")
    }
    return (
        <div className="border-b border-gray-200 py-2 flex flex-row justify-between px-12">
            <span className="text-4xl font-bold text-teal-800">NVB</span>
            <div></div>
            <div className="gap-4 justify-between flex flex-row text-xl">
                <div className="border text-teal-700 rounded flex flex-row gap-1 py-1 px-3 hover:bg-teal-600 hover:text-white hover:shadow-teal-600 cursor-pointer active:text-red-500">
                  <span className="font-medium">Iyandikishe</span>
                  <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 11h6m-3 -3v6" /></svg>
                </div>
                <div onPointerEnter={handleShow} onPointerLeave={handleShow} className="border flex gap-2 flex-row rounded bg-teal-600 text-white py-1 px-3 hover:shadow cursor-pointer active:text-red-500">
                    <span>Kwinjira</span>
                    <svg className="h-6 w-6 self-center hidden" id="pointerIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
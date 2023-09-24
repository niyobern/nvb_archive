import { useState } from "react"
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
            <div className="fixed bottom-4 right-4 hover:bg-teal-800 rounded-r-full rouded-l group flex flex-row content-center">
                <div className="text-white text-2xl font-medium hidden group-hover:flex flex-col justify-center px-2"><span>Injira</span></div>
                <div className="rounded-full border-2 text-teal-800 border-green-800 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" /></svg>
                </div>
            </div>
        </div>
    )
}
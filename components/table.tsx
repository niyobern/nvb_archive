import FormResponse from "./formResponse";
import { useState } from "react";
import FormApply from "./Form";
import AddSingle from "./AddSingle";
import Request from "./Request";
import axios from "axios";
import Email from "./Email";

export default function Table({ items, titles, fields, fieldnames, showPop, close, formResponse }: any){
    const [hidden, setHidden] = useState(true)
    const [report, setreport] = useState(true)
    const emailFields = [{value: "Email", type: "email"}, {value: "Report", type: "text"}]
    function handleHidden(){
        setHidden(!hidden)
    }
    function handleEmail(){
        setreport(!report)
		// axios.post("/home", {email: "niyobern@outlook.com"}, {headers: {"Accept": "application/json"}})
	}
    return (
 <div className="h-screen py-5">
    <div className={`${hidden ? "hidden" : "flex" } fixed bg-sky-400 flex-col items-center w-screen md:mx-36 lg:mx-48 xl:mx-64 md:mt-24 md:w-1/2`}><FormApply fields={fields} fieldnames={fieldnames} clicked={handleHidden} initial={[]}/></div>
    <div className={`${showPop ? "flex" : "hidden" } fixed bg-white border border-green-600 flex-col items-center w-screen md:ml-36 md:mr-36 md:mt-24 md:w-1/2`}><FormResponse formResponse={formResponse} clicked={close}/></div>
        <div className='overflow-x-auto w-full'>
            <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead className="bg-blue-900">
                    <tr className="text-white text-left">
                    {titles.map((item: any) => (
                        <th key={item} className="font-semibold text-sm uppercase px-6 py-4"> {item} </th>
                    ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {items && items.map((item: object) => (
                    <tr key={Object.values(item)[0]}>
                            {Object.values(item).map((value: any, index: number) => (
                            <td className="px-6 py-4" key={titles[index]}>
                                <p className="text-gray-500 text-sm font-semibold tracking-wide"> {value}</p>
                            </td>
                            ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <button onClick={handleEmail} className={`flex fixed z-90 bottom-6 mx-6 bg-green-600 w-14 h-14 rounded-full drop-shadow-lg justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl`}>
			<svg className="h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round">  <polyline points="8 17 12 21 16 17" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>
        </button>  
        <button onClick={handleHidden} className={`${hidden ? "flex": "hidden"} fixed z-90 bottom-6 right-6 bg-green-600 w-14 h-14 rounded-full drop-shadow-lg justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl`}>
          <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-10 h-10 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
         </svg>
        </button>  
    </div>
    )
}
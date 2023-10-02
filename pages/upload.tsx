import Add from "../components/add"
import Create from "../components/create"
import {Cha, useState } from "react"

export default  function Upload(){
    const [formdata, setFormdata] = useState({})
    const [count, setCount] = useState([1])
    function changeCount(){
        const newCount = [...count]
        newCount.push(count[count.length] + 1)
        setCount(newCount)
    }
    function handleChange(e:any){
        const target = e.target;
        const value = target.type === "file" ? target.files[0] : target.value;
        const name = target.name;
        setFormdata({
          ...formdata,
          [name]: value,
        });
    }
    return (
        <div className="flex flex-col bg-teal-200 h-screen gap-2">
            <div className="flex flex-col p-2 gap-1">
                <label htmlFor="question">Question</label>
                <input type="text" id="question" name="question" className="bg-white border-b border-gray-200 rounded p-1"/>
            </div>
            <div className="flex flex-col mx-2 bg-sky-200">
                
                    {count.map((i)=>(
                        <div className="flex flex-col p-2 gap-1">
                            <label htmlFor={`option${i}`}>Option 1</label>
                            <div className="flex flex-row gap-2 w-full">
                                <input type="text" id={`option${i}`} name={`option${i}`} className="bg-white p-1 w-full" onChange={handleChange}/>
                                <input type="file" id={`file${i}`} name={`file${i}`} className="bg-white p-1 w-full" onChange={handleChange}/>
                            </div>
                        </div>
                    ))}
                
                <div onClick={changeCount}>
                    <svg className="h-12 w-12 text-green-500 p-2 font-bold"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>                
                </div>
            </div>
        </div>
    )
}
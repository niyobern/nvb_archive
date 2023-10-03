import Add from "../components/add"
import Create from "../components/create"
import {ChangeEvent, useState } from "react"
import axios from "axios"

export default  function Upload(){
    const [formdata, setFormdata] = useState<IFormData>({})
    const [count, setCount] = useState([1])

    interface IFormData {
        [key: string]: string | File;
      }
    function changeCount(){
        const newCount = [...count]
        newCount.push(count.length + 1)
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
     function handleSubmit(e: any){
        e.preventDefault()
        const options = []
        const files = []
        for ( let i in formdata){
            if (i.slice(0,6) === "option") {
                options.push(formdata[i])
            } else {
                files.push(formdata[i])
            }
        }
        axios.post(`https://nvb_backend-1-z3745144.deta.app/lesson/question?question=${formdata.question}`, options)
        .then(data => console.log(data.data.key))
     }
    return (
        <div className="flex flex-col bg-teal-200 h-screen gap-2">
            <div className="flex flex-col p-2 gap-1">
                <label htmlFor="question">Question</label>
                <input type="text" id="question" name="question" className="bg-white border-b border-gray-200 rounded p-1"/>
            </div>
            <div className="flex flex-col mx-2 bg-sky-200">
                
                    {count.map(i=>(
                        <div className="flex flex-col p-2 gap-1">
                            <label htmlFor={`option${i}`}>Option {i}</label>
                            <div className="flex flex-row gap-2 w-full">
                                <input type="text" id={`option${i}`} name={`option${i}`} className="bg-white p-1 w-full" onChange={handleChange}/>
                                <input type="file" id={`file${i}`} name={`file${i}`} className="bg-white p-1 w-32" onChange={handleChange}/>
                            </div>
                        </div>
                    ))}
                
                <div onClick={changeCount}>
                    <svg className="h-12 w-12 text-green-500 p-2 font-bold"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>                
                </div>
            </div>
            <div onClick={handleSubmit} className="text-white font-medium p-2 cursor-pointer bg-teal-600">Submit</div>
        </div>
    )
}

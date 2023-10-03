import Add from "../components/add"
import Create from "../components/create"
import {ChangeEvent, useState } from "react"
import axios from "axios"

export default  function Upload(){
    const [formdata, setFormdata] = useState<IFormData>({})
    const [count, setCount] = useState([1])
    const [imageMode, setImageMode] = useState(false)
    const [question, setQuestion] = useState("")
    const [image, setImage] = useState<File>()
    const [key, setKey] = useState("")

    interface IFormData {
        [key: string]: string | File;
      }
    function changeCount(){
        const newCount = [...count]
        newCount.push(count.length + 1)
        setCount(newCount)
    }

    function handleQuestion(e: any){
        setQuestion(e.target.value)
    }
    function handleImage(e: any){
        setImage(e.target.files[0])
    }
    function handleChange(e:any){
        const target = e.target;
        const value = target.type === "file" ? target.files[0] : target.value;
        if (target.type === "file"){
            for ( let i in formdata){
                if (i.slice(0,6) === "option") {
                    delete formdata[i]
                }
            }
            setImageMode(true)
        }
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
        const data = new FormData()
        image && data.append("image", image)
        axios.post(`https://nvb_backend-1-z3745144.deta.app/lesson/question?question=${question}&options=${options}`, data)
        .then(data => setKey(data.data.key))
        for (let i of files){
            const imageUpload = new FormData()
            imageUpload.append("image", i)
            axios.post(`https://nvb_backend-1-z3745144.deta.app/question/photo?question=${key}`, imageUpload)
            .then(data => console.log(data.data, "image"))
        }
     }
    return (
        <div className="flex flex-col bg-teal-200 h-screen gap-2">
            <div className="flex flex-col p-2 gap-1">
                <label htmlFor="question">Question</label>
                <input type="text" id="question" name="question" className="bg-white border-b border-gray-200 rounded p-1" onChange={handleQuestion}/>
            </div>
            <div className="flex flex-col px-4 bg-white">
                <label htmlFor="image">Image Question</label>
                <input type="file" id="image" name="image" className="w-full p-2" onChange={handleImage}/>
            </div>
            <div className="flex flex-col mx-2 bg-sky-200">
                
                    {count.map(i=>(
                        <div className="flex flex-col p-2 gap-1">
                            <label htmlFor={`option${i}`}>Option {i}</label>
                            <div className="flex flex-row gap-2 w-full">
                                <input type="text" id={`option${i}`} name={`option${i}`} className={`${imageMode ? "w-32": " w-full"} bg-white p-1`} onChange={handleChange}/>
                                <input type="file" id={`file${i}`} name={`file${i}`} className={`${imageMode ? "w-full": "w-32"}bg-white p-1`} onChange={handleChange}/>
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

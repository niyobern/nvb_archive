import Add from "../components/add"
import Create from "../components/create"
import {ChangeEvent, useState } from "react"

export default  function Upload(){
    const [formdata, setFormdata] = useState({})
    function handleChange(e:any){
        const target = event.target;
        const value = target.type === "file" ? target.files[0] : target.value;
        const name = target.name;
        setFormdata({
          ...formdata,
          [name]: value,
        });
        // console.log(formdata)
    }
    return (
        <div className="flex flex-col bg-teal-200 h-screen gap-2">
            <div className="flex flex-col p-2 gap-1">
                <label htmlFor="question">Question</label>
                <input type="text" id="question" name="question" className="bg-white border-b border-gray-200 rounded p-1"/>
            </div>
            <div className="flex flex-col mx-2 bg-sky-200">
                <div className="flex flex-col p-2 gap-1">
                    <label htmlFor="option1">Option 1</label>
                    <div className="flex flex-row gap-2 w-full">
                        <input type="text" id="option1" name="option1" className="bg-white p-1 w-full" onChange={handleChange}/>
                        <input type="file" id="file1" name="file" className="bg-white p-1 w-full" onChange={handleChange}/>
                    </div>
                </div>                
            </div>
        </div>
    )
}
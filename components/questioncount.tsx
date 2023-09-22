import { useState } from "react";
export default function Count(){
    const questions = []
    for (let i = 0; i<20; i++){
        questions.push(false)
    }
    const [qdone, setQdone] = useState(questions)
    console.log(qdone)
    function handleDone(index: any){
        setQdone(...qdone)
    }
    return (
        <div className="w-full grid grid-rows-4 grid-cols-5 md:grid-rows-2 md:grid-cols-10 gap-0">
            {qdone.map( (value, index) => (
                <div onClick={() => handleDone(index)} className={`${value ? "bg-green-700" : "bg-green-400"} w-full h-6 border border-gray-200`} key={index}></div>
            ))}
        </div>
    )
}
import { useState } from "react";
export default function Count(){
    const questions = []
    for (let i = 0; i<20; i++){
        questions.push(false)
    }
    const [qdone, setQdone] = useState(questions)
    function handleDone(index: any){
        const prev = qdone
        prev[index] = true
        setQdone(prev)
    }
    return (
        <div className="flex flex-row flex-wrap">
            {qdone.map( (value, index) => (
                <div onClick={(index) => handleDone(index)} className={`${value ? "bg-green-700" : "bg-green-400"} w-12 h-6 border border-gray-200`} key={index}></div>
            ))}
        </div>
    )
}
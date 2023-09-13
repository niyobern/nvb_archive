import { useState, useEffect } from "react"
export default function Indicator({ start }: any){
    const duration = 20*1000
    const [current, setCurrent] = useState(Date.now())
    const elapsed = current - start
    const percentage = elapsed*100 / duration
    useEffect(
        () => {
            setCurrent(Date.now())
        }, [current]
    )
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div><span className="text-green-700 font-medium">Total Time:</span> <span className="text-green-700 txt-lg font-semibold">0:20:00</span></div>
                <div><span className="text-blue-700 font-medium">Time Left:</span> <span className="text-blue-700 text-lg font-semibold">0:12:56</span></div>
            </div>
            <div className="w-full h-4 bg-sky-500 relative">
                <div className="bg-red-600 h-full z-70 text-white" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}
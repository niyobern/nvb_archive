import { useState, useEffect } from "react"

export default function Indicator({ start, duration }: any){
    function msToTime(s: any) {
        function pad(n: any, z: any) {
          z = z || 2;
          return ('00' + n).slice(-z);
        }
      
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
      
        return pad(hrs, 2) + ':' + pad(mins, 2) + ':' + pad(secs, 2);
      }
      
    const [percentage, setPercentage] = useState(0)
    useEffect(
        () => {
            setTimeout( () => {
                const current = Date.now();
                const elapsed = current - start;
                setPercentage(elapsed*100 / duration)
                // if (percentage > 100){
                //     submit(1)
                // }
            }, 500)
        }
    )
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div><span className="text-green-700 font-medium">Total Time:</span> <span className="text-green-700 txt-lg font-semibold">{msToTime(duration)}</span></div>
                <div><span className="text-blue-700 font-medium">Time Left:</span> <span className="text-blue-700 text-lg font-semibold">{msToTime(duration - (percentage*duration/100))}</span></div>
            </div>
            <div className="w-full h-4 bg-sky-500 relative">
                <div className="bg-red-600 h-full z-70 text-white" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}
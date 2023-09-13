export default function Indicator(){
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div><span>Time Left:</span> <span>0:12:56</span></div>
                <div><span>Total Time:</span> <span>0:20:00</span></div>
            </div>
            <div className="w-full h-8 bg-red-600">
                <span className="bg-blue-600 h-full w-[23%]"></span>
            </div>
        </div>
    )
}
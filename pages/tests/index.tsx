import Question from "../../components/questtion"
import Indicator from "../../components/timeindicator"
import Count from "../../components/questioncount"
import Navigate from "../../components/navigate"

export default function Ibazwa(){
    const start = Date.now()
    const duration = 20*60*1000
    return (
        <div className="bg-teal-100 px-1 gap-4 md:px-10 py-2 md:py-4 flex flex-col h-full">
            <Indicator start={start} duration={duration}/>
            <Count/>
            <Question/>
            <Navigate/>
        </div>
    )
}
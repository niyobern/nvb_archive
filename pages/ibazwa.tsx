import Question from "../components/questtion"
import Indicator from "../components/timeindicator"
import Count from "../components/questioncount"

export default function Ibazwa(){
    const start = Date.now()
    const duration = 20*60*1000
    return (
        <div className="bg-teal-100 md:px-10 flex flex-col h-full">
            <Indicator start={start} duration={duration}/>
            <Count/>
            <Question/>
        </div>
    )
}
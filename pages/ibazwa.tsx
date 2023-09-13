import Question from "../components/questtion"
import Indicator from "../components/timeindicator"
import Count from "../components/questioncount"

export default function Ibazwa(){
    const start = Date.now()
    const duration = 20*60*1000
    return (
        <div>
            <Indicator start={start} duration={duration}/>
            <Count/>
            <Question/>
        </div>
    )
}
import Question from "../components/questtion"
import Indicator from "../components/timeindicator"

export default function Ibazwa(){
    const start = Date.now()
    const duration = 20*60*1000
    return (
        <div>
            <Indicator start={start} duration={duration}/>
            <Question/>
        </div>
    )
}
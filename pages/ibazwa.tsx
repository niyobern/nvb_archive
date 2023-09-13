import Question from "../components/questtion"
import Indicator from "../components/quizindicator"

export default function Ibazwa(){
    const start = Date.now()
    return (
        <div>
            <Indicator start={start}/>
            <Question/>
        </div>
    )
}
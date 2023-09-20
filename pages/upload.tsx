import Add from "../components/add"
import Create from "../components/create"

export default  function Upload(){
    return (
        <div className="bg-blue-400 h-full w-full rounded shadow shadow-blue-400 flex flex-col justif-center content-center">
            <Create/>
            {/* <Add lesson_key="cffdrts" lesson_title="Title of Lesson"/> */}
        </div>
    )
}
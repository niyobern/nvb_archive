import Add from "../components/add"
import Create from "../components/create"
import { useState } from "react"

export default  function Upload(){
    const [lessonKey, setLessonKey] = useState("")
    const [title, setLessonTitle] = useState("Title of Lesson")

    function handleLesson(data: any){
        console.log(data)
        setLessonKey(data.lesson_key)
        setLessonTitle(data.title)
    }
    function handleFinish(){
        setLessonKey("")
        setLessonTitle("Title of Lesson")
    }
    return (
        <div className="bg-blue-400 h-full w-full rounded shadow shadow-blue-400 flex flex-col justif-center content-center">
            {lessonKey? <Add lesson_key={lessonKey} lesson_title={title} handle={handleFinish}/> : <Create handle={handleLesson}/>}
        </div>
    )
}
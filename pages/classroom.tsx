import Lesson from "../components/lesson"
import SideBar from "../components/sidebar"
export default function Class(){
    return (
        <div className="flex flex-row justify between">
            <SideBar/>
            <Lesson/>
            <SideBar/>
        </div>
    )
}
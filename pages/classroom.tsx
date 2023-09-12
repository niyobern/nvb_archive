import Lesson from "../components/lesson"
import SideBar from "../components/sidebar"
export default function Class(){
    return (
        <div className="flex flex-row">
            <SideBar/>
            <Lesson/>
            <SideBar/>
        </div>
    )
}
import Content from "../components/contentitem"
import SideBar from "../components/sidebar"

export default function amasomo(){
    return (
        <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
            <Content/>
            <Content/>
            <Content/>
            <Content/>
        </div>
    )
}
import Content from "../components/contentitem"
import SideBar from "../components/sidebar"

export default function amasomo(){
    return (
        <div className="flex flex-row">
            <SideBar/>
            <div className="flex flex-col gap-4 bg-gray-100">
                <Content/>
                <Content/>
                <Content/>
                <Content/>
            </div>
            <SideBar/>
        </div>
    )
}
import Content from "../components/contentitem"
import SideBar from "../components/sidebar"

export default function amasomo(){
    return (
        <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
            <Content time="40 minutes" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content time="40 minutes" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content time="40 minutes" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content time="40 minutes" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
    )
}
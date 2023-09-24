import Content from "../../components/contentitem"

export default function amasomo(){
    return (
        <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
            <Content id="1" current={true} time="40 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content id="2" time="200 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content id="3" time="30 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content id="4" time="57 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
    )
}
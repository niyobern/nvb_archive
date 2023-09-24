import Content from "../../components/contentitem"

export default function Igice(){
    return (
        <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
            <Content link="/" title="Introduction" time="23 cards"/>
            <Content link="/" title="Introduction" time="1 cards"/>
            <Content link="/" title="Introduction" time="13 cards" current={true}/>
            <Content link="/" title="Introduction" time="0 cards"/>
        </div>
    )
}
import Banner from "../components/lessonbanner"

export default function amasomo(){
    return (
        <div className="grid grid-cols-2 gap-4 bg-gray-100 p-2 shadow-l">
            <Banner/>
            <Banner/>
            <Banner/>
            <Banner/>
        </div>
    )
}
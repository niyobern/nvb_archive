import Banner from "../../components/lessonbanner"

export default function amasomo(){
    return (
        <div className="flex flex-col md:grid grid-cols-2 gap-4 bg-gray-100 p-2">
            <Banner/>
            <Banner/>
            <Banner/>
            <Banner/>
        </div>
    )
}
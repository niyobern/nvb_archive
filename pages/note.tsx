import Card from "../components/card"
import Navigate from "../components/navigate"

export default function Note(){
    return (
        <div className="bg-teal-100 px-1 md:px-10 py-4 flex flex-col gap-6 md:gap-4 h-full">
            <Card/>
            <Navigate/>
        </div>
    )
}
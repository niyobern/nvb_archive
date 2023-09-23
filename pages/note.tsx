import Card from "../components/card"
import Navigate from "../components/navigate"

export default function Note(){
    return (
        <div className="bg-teal-100 md:px-10 py-4 flex flex-col gap-4 h-full">
            <Card/>
            <Navigate/>
        </div>
    )
}
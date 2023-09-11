export default function NavBar(){
    return (
        <div className="border-b border-gray-200 py-4 flex flex-row justify-between px-12">
            <span className="text-4xl font-bold text-emerald-400">NVB</span>
            <div></div>
            <div className="gap-4 justify-between flex flex-row text-xl">
                <span className="border rounded py-1 px-3 hover:bg-emerald-200">Iyandikishe</span>
                <span className="border rounded bg-emerald-400 text-white py-1 px-3 hover:bg-emerald-600">Kwinjira</span>
            </div>
        </div>
    )
}
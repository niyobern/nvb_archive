export default function SideBar(){
    return (
        <div className="w-1/2 bg-white py-4 h-screen">
            <ul className="pl-4 pr-2 flex flex-col gap-2 text-gray-800 font-normal">
                <li className="text-lg font-bold">Lesson Title</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">Introduction</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">API development with Gin</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">Frontend development with React</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">Introduction</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">API development with Gin</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">Frontend development with React</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">Introduction</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">API development with Gin</li>
                <li className="hover:text-lg hover:font-medium active:text-green-800 cursor-pointer">Frontend development with React</li>
            </ul>
        </div>
    )
}
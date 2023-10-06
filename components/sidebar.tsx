import Link from "next/link"
export default function SideBar( { data, title }: any){
    return (
        <div className="w-full bg-teal-700 py-4 h-full">
            <ul className="pl-4 pr-2 flex flex-col gap-2 text-white font-normal">
                <li className="text-lg font-bold">{title}</li>
                {data.map((item: any) => <Link href={item.link} key={item.text}><li className="hover:text-lg hover:font-medium active:text-red-500 cursor-pointer">{item.text}</li></Link>)}
            </ul>
        </div>
    )
}
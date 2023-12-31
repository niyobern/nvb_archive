import Link from "next/link"

export default function Content({ title, description, time, id, link, current }: any){
    if (id){
        return (
            <Link href={`/note/${id}`}>
                <div className={`border border-gray-500 rounded p-2 md:p-4 flex flex-col hover:bg-teal-400 ${current ? "bg-teal-400": "bg-white"}`}>
                    <div className="flex flex-row justify-between">
                        <span className="text-lg font-medium">{title}</span>
                        {time && <span className="text-sm text-gray-700">{time}</span>}
                    </div>
                    {description && <p>{description}</p>}
                </div>
            </Link>
        )
    } else if (link){
     return (
    <Link href={link}>
        <div className={`border border-gray-500 rounded p-2 md:p-4 flex flex-col hover:bg-teal-400 ${current ? "bg-teal-400": "bg-white"}`}>
            <div className="flex flex-row justify-between">
                <span className="text-lg font-medium">{title}</span>
                {time && <span className="text-sm text-gray-700">{time}</span>}
            </div>
            {description && <p>{description}</p>}
        </div>
    </Link>
     )
    }
    return (
        <div className={`border border-gray-500 rounded p-2 md:p-4 flex flex-col hover:bg-teal-400 ${current ? "bg-teal-400": "bg-white"}`}>
            <div className="flex flex-row justify-between">
                <span className="text-lg font-medium">{title}</span>
                {time && <span className="text-sm text-gray-700">{time}</span>}
            </div>
            {description && <p>{description}</p>}
        </div>
    )
}
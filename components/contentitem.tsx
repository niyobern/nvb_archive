import Link from "next/link"

export default function Content({ title, description, time, id, link, current }: any){
    if (id){
        return (
            <Link href={`/isomo/${id}`}>
                <div className={`border border-gray-500 rounded p-2 md:p-4 flex flex-col ${current ? "bg-teal-400": "bg-green-400"}`}>
                    <div className="flex flex-row justify-between">
                        <span className="text-lg font-medium">{title}</span>
                        {time && <span className="text-sm text-gray-700">{time} remaining</span>}
                    </div>
                    {description && <p>{description}</p>}
                </div>
            </Link>
        )
    } else if (link){
     console.log(link)
     return (
    <Link href={link}>
        <div className="rounded p-2 md:p-4 flex flex-col bg-white">
            <div className="flex flex-row justify-between">
                <span className="text-lg font-medium">{title}</span>
                {time && <span className="text-sm text-gray-700">{time} remaining</span>}
            </div>
            {description && <p>{description}</p>}
        </div>
    </Link>
     )
    }
    return (
        <div className="border border-gray-500 rounded p-2 md:p-4 flex flex-col bg-white">
            <div className="flex flex-row justify-between">
                <span className="text-lg font-medium">{title}</span>
                {time && <span className="text-sm text-gray-700">{time} remaining</span>}
            </div>
            {description && <p>{description}</p>}
        </div>
    )
}
import Image from "next/image"
export default function Card( { note, position }: any) {
    const points = note.points[0].split(",")
    return (
        <div className="flex flex-col justify-center content-center">
            <div className="rounded bg-white shadow-lg shadow-gray-400 flex flex-col">
                <span className="text-white bg-green-600 py-1 px-2 text-lg font/bold w-fit">{position}</span>
                <p className="text-lg text-gray-800 py-16 px-2 md:px-16 m-2 md:m-4 font-medium text-center">{note.title}</p>
                { note.image && <Image src={`../public/images/lessons/${note.image}`} alt="Image" height={500} width={500} className="h-48 md:h-64 rounded-sm self-center w-full"/>}
                <div className="flex flex-col gap-2 md:px-10 m-2 md:m-4">
                    {points.map((item: any) => (
                        <div key={item} className="flex flex-row gap-2 justify-start">
                            <svg className="h-6 w-6 text-teal-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
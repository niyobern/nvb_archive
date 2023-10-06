import Image from "next/image"
export default function Card( { note }: any) {
    const points = note.points[0].split(",")
    return (
        <div className="flex flex-col justify-center content-center">
            <div className="rounded bg-white shadow-lg shadow-gray-400 p-2 md:p-4 md:mx-auto flex flex-col">
                <p className="text-justify text-lg text-gray-800 md:py-2">{note.title}</p>
                <Image src="https://nvb_backend-1-z3745144.deta.app/image" alt="Image" height={500} width={500} className="h-48 md:h-64 rounded-sm self-center bg-black"/>
                <div className="flex flex-col gap-2 mt-2">
                    {points.map((item: any) => (
                        <div key={item} className="flex flex-row gap-2 justify-start">
                            <svg className="h-6 w-6 text-teal-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                            <span>{item}</span>
                        </div>
                    ))}
                    {/* <div className="flex flex-row gap-2 justify-start">
                        <svg className="h-6 w-6 text-teal-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                    <div className="flex flex-row gap-2 justify-start">
                        <svg className="h-6 w-6 text-teal-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                    <div className="flex flex-row gap-2 justify-start">
                        <svg className="h-6 w-6 text-teal-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
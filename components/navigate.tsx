import Link from "next/link"
export default function Navigate({ next, prev, test, move, prevDisabled, nextDisabled }: any){
    if (test){
        return (
            <div className="flex flex-row justify-between gap-24">
                <div onClick={() => move(-1)} className="text-center w-full shadow-lg shadow-gray-600 px-4 md:px-8 py-1 md:py-2 bg-teal-600 hover:bg-green-600 cursor-pointer text-white font-semibold text-lg">Prev</div>
                <div onClick={() => move(1)} className="text-center w-full shadow-lg shadow-gray-600 px-4 md:px-8 py-1 md:py-2 bg-teal-600 hover:bg-green-600 cursor-pointer text-white font-semibold text-lg">Next</div>
        </div>
        )
    }
    return (
        <div className="flex flex-row justify-between gap-24">
            {prevDisabled ? <div className="text-center w-full shadow-lg shadow-gray-600 px-4 md:px-8 py-1 md:py-2 bg-gray-600 hover:bg-green-600 cursor-pointer text-white font-semibold text-lg">Prev</div> : <Link href={prev}><div className="text-center w-full shadow-lg shadow-gray-600 px-4 md:px-8 py-1 md:py-2 bg-teal-600 hover:bg-green-600 cursor-pointer text-white font-semibold text-lg">Prev</div></Link>}
            {nextDisabled ? <div className="text-center w-full shadow-lg shadow-gray-600 px-4 md:px-8 py-1 md:py-2 bg-gray-600 hover:bg-green-600 cursor-pointer text-white font-semibold text-lg">Next</div> : <Link href={next}><div className="text-center w-full shadow-lg shadow-gray-600 px-4 md:px-8 py-1 md:py-2 bg-teal-600 hover:bg-green-600 cursor-pointer text-white font-semibold text-lg">Next</div></Link>}
        </div>
    )
}
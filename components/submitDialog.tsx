export default function SubmitDialog( { submit, id }: any){
    return (
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
            <div className="bg-white h-1/2 w-screen md:w-1/2 shadow-lg shadow-teal-900 flex flex-col justify-center py-8 gap-4">
                <span className="text-lg font-medium text-teal-800 text-center">Do you want to submit?</span>
                <div className="flex gap-8 justify-center">
                    <div onClick={() => submit(0, false)} className="text-white font-semibold text-2xl bg-gray-400 px-4 py-2 hover:bg-gray-600 w-fit self-center cursor-pointer">Bireke</div>
                    <div onClick={() => submit(1, false)} className="text-white font-semibold text-2xl bg-teal-800 px-4 py-2 hover:bg-green-700 w-fit self-center cursor-pointer">Reba amanota</div>
                    <Link href={`/tests/${id}`} className="text-white font-semibold text-2xl bg-teal-800 px-4 py-2 hover:bg-green-700 w-fit self-center cursor-pointer">Subiramo</Link>
                </div>
            </div>
        </div>
    )
}
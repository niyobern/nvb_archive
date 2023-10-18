import Link from "next/link"
export default function AuthDialog(){
    return (
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
            <div className="bg-white h-full w-screen z-99 shadow-lg shadow-teal-900 flex flex-col justify-center py-8 gap-4">
                <span className="text-2xl font-semibold md:text-5xl text-teal-800 text-center">You are currently logged out</span>
                <span className="text-center text-red-800 font-medium text-lg md:text-2xl">This may be caused by logging in on another device</span>
                <span className="text-center text-gray-800 font-medium text-xl md:text-4xl">Do you want to log in again? </span>
                <div className="flex gap-8 justify-center my-4">
                    <Link href="/"> <div className="text-white font-semibold text-2xl bg-gray-400 px-4 py-2 hover:bg-gray-600 w-fit self-center cursor-pointer">Cancel</div> </Link>
                    <Link href="/user/login"> <div className="text-white font-semibold text-2xl bg-teal-800 px-4 py-2 hover:bg-green-700 w-fit md:w-48 text-center self-center cursor-pointer">Login</div> </Link>
                </div>
            </div>
        </div>
    )
}
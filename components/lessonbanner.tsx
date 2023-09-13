export default function Banner() {
    return (
        <div className="flex flex-col pt-4 gap-2 rounded-sm bg-white w-full pb-2 shadow-gray-200">
            <div className="text-3xl font-semibold px-2 md:px-4 text-green-800">Lorem ipsum dolor sit amet</div>
            <p className="text-md text-gray-700 px-2 md:px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="p-2">
                <span className="text-xl font-medium pb-2">Prerequisites</span>
                <p>
                    <span>Coding</span>, 
                    <span> Writing</span>,
                    <span> Eating</span>,
                    <span> Eating</span>,
                    <span> Eating</span>,
                    <span> Sleeping</span>
                </p>
            </div>
            <div className="p-2">
                <span className="text-xl font-medium pb-2">Related</span>
                <p>
                    <span>Coding</span>, 
                    <span> Writing</span>,
                    <span> Eating</span>,
                    <span> Eating</span>,
                    <span> Eating</span>,
                    <span> Sleeping</span>
                </p>
            </div>
            <div className="flex flex-row justify-between bg-gray-200 py-4 px-2 md:px-4">
                <span>Intermediate</span>
                <span>4 months</span>
                <span>4.5</span>
                <span>234 Reviews</span>
            </div>
            <div className="flex flex-row justify-between">
                <div className="text-green-800 font-medium cursor-pointer rounded-sm px-5 py-2 border border-green-800 hover:bg-green-700 hover:text-white active:text-red-500">View details</div>
                <div className="text-white rounded-sm font-medium cursor-pointer px-4 py-2 bg-green-800 hover:bg-green-700 hover:shadow active:text-red-500">Start Learning</div>
            </div>
        </div>
    )
}
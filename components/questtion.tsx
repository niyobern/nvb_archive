export default function Question() {
    return (
        <div className="bg-teal-100 h-screen flex flex-col justify-center content-center px-10">
            <div className="rounded bg-white shadow-lg shadow-gray-400 p-4 mx-auto flex flex-col">
                <span className="text-2xl font-medium text-teal-900 text-center">Question 1</span>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex flex-col gap-2 mt-2">
                    <div className="rounded bg-gray-200 p-2 hover:bg-gray-300 hover:shadow-lg active:text-white">Option 1 Lorem ipsum dolor</div>
                    <div className="rounded bg-gray-200 p-2 hover:bg-gray-300 hover:shadow-lg active:text-white">Option 1 Lorem ipsum dolor</div>
                    <div className="rounded bg-gray-200 p-2 hover:bg-gray-300 hover:shadow-lg active:text-white">Option 1 Lorem ipsum dolor</div>
                    <div className="rounded bg-gray-200 p-2 hover:bg-gray-300 hover:shadow-lg active:text-white">Option 1 Lorem ipsum dolor</div>
                </div>
            </div>
        </div>
    )
}
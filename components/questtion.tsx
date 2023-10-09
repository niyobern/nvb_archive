export default function Question({ question }:any) {
    return (
        <div className="py-2 md:py-8 flex flex-col justify-center content-center">
            <div className="rounded bg-white shadow-lg shadow-gray-400 p-4 mx-auto flex flex-col">
                <span className="text-2xl font-medium text-teal-900 text-center">Question 1</span>
                <p className="text-justify">{question.question}</p>
                <div className="flex flex-col gap-2 mt-2">
                    {question.options && question.options.map((item: any) => <div key={item} className="rounded bg-gray-200 p-2 hover:bg-gray-300 hover:shadow-lg active:text-white cursor-pointer">{item}</div>)}
                </div>
            </div>
        </div>
    )
}
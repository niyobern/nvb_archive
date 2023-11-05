import Image from "next/image"

export default function Question({ question, count, answer, test }:any) {
    if (test){
        return (
            <div className="py-2 md:py-8 flex flex-col justify-center content-center w-full">
                <div className="rounded bg-white shadow-lg shadow-gray-400 p-4 flex flex-col">
                    <span className="text-2xl font-medium text-teal-900 text-center">Question {count + 1}</span>
                    <p className="text-justify">{question.question}</p>
                { question.image && <Image priority={true} src={question.image} alt="Image" height={500} width={500} className="h-48 md:h-64 rounded-sm self-center w-fit"/>}
                    <div className="flex flex-col gap-2 mt-2 h-fit">
                        {question.answers && question.answers[0].slice(0,36) !== "https://d1yurxstr9hyp.cloudfront.net" && question.answers.map((item: any, index: number) => <div onClick={() => answer(count, index + 1, 1)} key={index} className={`${item === "" ? "hidden" : "active:text-white"} bg-gray-200 rounded p-2 hover:bg-gray-300 hover:shadow-lg active:text-white cursor-pointer`}>{item}</div>)}
                        {question.answers && question.answers[0].slice(0,36) === "https://d1yurxstr9hyp.cloudfront.net" && question.answers.map((item: any, index: number) => <Image priority={true} onClick={() => answer(count, index + 1, 1)} key={index} src={item} alt="Image" height={500} width={500} className="h-48 md:h-64 rounded-sm self-center w-fit"/>)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="py-2 md:py-8 flex flex-col justify-center content-center w-full">
            <div className="rounded bg-white shadow-lg shadow-gray-400 p-4 flex flex-col">
                <span className="text-2xl font-medium text-teal-900 text-center">Question {count + 1}</span>
                <p className="text-justify">{question.question}</p>
                { question.image && <Image src={question.image} alt="Image" height={500} width={500} className="h-48 md:h-64 rounded-sm self-center w-fit"/>}
                <div className="flex flex-col gap-2 mt-2 h-fit">
                    {question.answers && question.answers.map((item: any, index: number) => <div key={index} className={`${index + 1 == answer && index + 1 != question.answer? "bg-red-500": "bg-gray-200"} ${index + 1 == question.answer && index + 1 == answer? "bg-green-800 text-white" : " bg-gray-200"} ${index + 1 == question.answer && index + 1 != answer? "bg-green-400 text-white" : " bg-gray-200"} rounded p-2 hover:bg-gray-300 hover:shadow-lg active:text-white cursor-pointer`}>{item}</div>)}
                </div>
            </div>
        </div>
    )
}
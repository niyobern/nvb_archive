import { useState } from "react"

export default function Question({ question, count, answer, test }:any) {
    if (test){
        return (
            <div className="py-2 md:py-8 flex flex-col justify-center content-center w-full">
                <div className="rounded bg-white shadow-lg shadow-gray-400 p-4 flex flex-col">
                    <span className="text-2xl font-medium text-teal-900 text-center">Question {count + 1}</span>
                    <p className="text-justify">{question.question}</p>
                    <div className="flex flex-col gap-2 mt-2 h-fit">
                        {question.options && question.options.map((item: any, index: number) => <div onClick={() =>answer(count, index + 1)} key={item} className={`${item === "" ? "hidden" : "active:text-white"} bg-gray-200 rounded p-2 hover:bg-gray-300 hover:shadow-lg active:text-white cursor-pointer`}>{item}</div>)}
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
                <div className="flex flex-col gap-2 mt-2 h-fit">
                    {question.options && question.options.map((item: any, index: number) => <div onClick={() =>answer(count, index + 1)} key={item} className={`${index + 1 == question.choice ? "bg-red-500": "bg-gray-200"} ${index + 1 == question.answer ? "bg-green-800 text-white" : " bg-gray-200"} ${item === "" ? "hidden" : "active:text-white"} rounded p-2 hover:bg-gray-300 hover:shadow-lg active:text-white cursor-pointer`}>{item}</div>)}
                </div>
            </div>
        </div>
    )
}
export default function Answer({ answers, questions, move, count }: any){
    const states = []
    for (let i = 0; i<20; i++){
        if (answers[i] == questions[i].answer){
            states[i] = "bg-green-600"
        } else {
            states[i] = "bg-red-600"
        }
        states.push()
    }
    return (
        <div className="w-full grid grid-rows-4 grid-cols-5 md:grid-rows-2 md:grid-cols-10 gap-0">
            {states.map( (value, index) => (
                <div onClick={() => move(index, 0, index-count)} className={`${value} cursor-pointer w-full h-6 border border-gray-200 text-white font-semibold text-center`} key={index}>{index + 1}</div>
            ))}
        </div>
    )
}
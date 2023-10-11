export default function Count({ questions, move, total }: any){
    const states = []
    for (let i = 0; i<total; i++){
        if(questions[i] == undefined){
            states[i] = "bg-gray-400"
        } else if (questions[i] == 0){
            states[i] = "bg-emerald-500"
        } else {
            states[i] = "bg-green-700"
        }
        states.push()
    }
    return (
        <div className="w-full grid grid-rows-4 grid-cols-5 md:grid-rows-2 md:grid-cols-10 gap-0">
            {states.map( (value, index) => (
                <div onClick={() => move(index, 0, 0, index)} className={`${value} cursor-pointer w-full h-6 border border-gray-200 text-white font-semibold text-center`} key={index}>{index + 1}</div>
            ))}
        </div>
    )
}
export default function Details({ data }: any){
    return (
         <div className="bg-white rounded py-2 w-full h-48 md:h-full shadow-lg shadow-sky-600 mx-auto flex flex-col text-center justify-between">
            {Object.keys(data).map( (item: string) => (
                <div key={item} className="flex flex-row px-2 gap-2">
                    <span className="text-xl font-medium text-gray-900">{item}:</span>
                    <span className="text-lg text-teal-900">{data[item]}</span>
                </div>
            ))}
         </div> 
    )
}
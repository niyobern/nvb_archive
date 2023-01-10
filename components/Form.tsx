import { useFormSubmit, Form} from 'next-runtime/form';

export default function FormApply({ fields, fieldnames, clicked }: any){
    const data: string[] = fields
    return (
            <section className="text-gray-600 body-font justify-self-center w-full">
              <Form className="container py-6 mx-auto border-2 border-gray-600 shadow-lg shadow-green-600 bg-white rounded-lg " method='POST'>
                <div className="flex lg:w-5/6 w-full px-8 flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  {data.map((item, index) =>(
                    <div className="relative flex-grow w-full px-2" key={item}>
                      <label htmlFor={item} className="leading-7">{fieldnames[index]}</label>
                      <input type="text" id={item} name={item} className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  ))}
                  <div className="relative flex flex-col w-full h-20 justify-end px-2">
                    <div className="flex flex-row justify-between">
                      <button onClick={clicked} type="reset" className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Cancel</button>
                      <button onClick={clicked} type="submit" className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Commit</button>
                    </div>
                  </div>
                </div>
              </Form>
            </section>
    )
}
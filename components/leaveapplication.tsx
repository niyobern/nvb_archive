import { useFormSubmit, Form } from 'next-runtime/form';

export default function LeaveApply({ fields, fieldnames }: any){
    const data: string[] = fields
    return (
        <div className='h-screen w-screen flex flex-col md:flex-row justify-center md:px-48 md:py-16 bg-sky-900'>
            <section className="text-gray-600 body-font justify-self-center w-2/3">
              <Form className="container py-6 mx-auto border-2 border-gray-600 shadow-lg shadow-green-600 bg-white rounded-lg " method='POST'>
                <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  {data.map((item, index) =>(
                    <div className="relative flex-grow w-full" key={item}>
                      <label htmlFor={item} className="leading-7">{fieldnames[index]}</label>
                      <input type="text" id={item} name={item} className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  ))}
                  <div className="relative flex flex-col w-full h-20 justify-end">
                    <div className="flex flex-row justify-between">
                        <button type="submit" className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Submit</button>
                    </div>
                  </div>
                </div>
              </Form>
            </section>
        </div>
    )
}
import { useFormSubmit, Form} from 'next-runtime/form';

export default function FormApply({ fields, fieldnames, clicked, initial }: any){
    const data: {value: string, type: string}[] = fields
    var initialdata: any = []
    data.map((item, index) => {
      const value: string = item.value
      if (initial && initial[value]){
        initialdata[index] = initial[value]
      } else {
        initialdata[index] = null
      };
    })
    return (
            <section className="text-gray-600 body-font justify-self-center w-full h-full">
              <Form className="container py-6 mx-auto bg-white" method='POST'>
                <div className="flex lg:w-5/6 w-full px-8 flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start">
                  <div className="grid grid-cols-2 w-full">
                    <div className="relative flex-grow w-full px-2">
                      <label htmlFor="gender" className="leading-7">Gender</label>
                      <select id="gender" name="gender" className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="relative flex-grow w-full px-2">
                      <label htmlFor="image" className="leading-7">Profile Image</label>
                      <input type="file" id="image" name="image" accept="image/png, image/jpeg" className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  {data.map((item, index) =>(
                    <div className="relative flex-grow w-full px-2" key={item.value}>
                      <label htmlFor={item.value} className="leading-7">{fieldnames[index]}</label>
                      <input type={item.type} id={item.value} name={item.value} value={initialdata[index]} className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  ))}
                  </div>
                  <div className="relative flex flex-col w-full h-20 justify-end pr-5 pl-0 mx-0">
                    <div className="flex flex-row justify-between">
                      <button onClick={clicked} type="reset" className="text-white bg-red-500 border-0 py-2 px-10 focus:outline-none hover:bg-gray-600 rounded text-lg">Cancel</button>
                      <button onClick={clicked} type="submit" className="text-white bg-green-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Commit</button>
                    </div>
                  </div>
                </div>
              </Form>
            </section>
    )
}
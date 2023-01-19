import { Form } from 'next-runtime/form';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BonusorRadiant({ clicked, fields, bonus }: any){
  const [list, setList] = useState([])
  useEffect(() => {
    const optionsPromise = axios.get('/users', {headers: {"Accept": "application/json"}})
    optionsPromise.then(res =>(setList(res.data.data))).catch(err => (console.log(err)))
  });
    const data: any[] = fields
    return (
<section className="text-gray-600 body-font justify-self-center w-full">
  <Form className="container py-6 mx-auto" method='POST'>
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="employee" className="leading-7 text-sm text-gray-600">Employee</label>
          <input list="employeelist" type="text" id="employee" name="employee" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          <datalist id="employeelist" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{list.map((single: any) => (<option key={single.id} value={single.id}>{single.name} -- {single.department}-- {single.position}</option>))}</datalist>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="amount" className="leading-7 text-sm text-gray-600">Amount</label>
          <input type="number" id="amount" name="amount" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
{bonus && <div className="relative flex-grow w-full">
            <label htmlFor="start" className="leading-7 text-sm text-gray-600">Start</label>
            <input type="datetime-local" id="start" name="start" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>}
{bonus && <div className="relative flex-grow w-full">
            <label htmlFor="end" className="leading-7 text-sm text-gray-600">Start</label>
            <input type="datetime-local" id="end" name="end" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>}
      <div className="relative flex flex-col w-full h-20 justify-end">
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
import { Form } from 'next-runtime/form';
import { useEffect, useState } from 'react';

export default function Email({ clicked, fields }: any){
    const emails = ["niyobern@outlook.com", "entawuzumunsi@gmail.com"]
    const endpoints = ["cash", "purchases", "requests", "kitchen", "sales", "stockdeprecation"]
    return (
<section className="text-gray-600 body-font justify-self-center w-full">
  <Form className="container py-6 mx-auto" method='POST' action='/home'>
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="emailfield" className="leading-7 text-sm text-gray-600">Destination Email</label>
          <input list="emailist" id="emailfield" type="text" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          <datalist id="emailist" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            {emails.map((single: any) => (<option key={single} value={single}>{single}</option>))}
          </datalist>
          <label htmlFor="endpoint" className="leading-7 pt-2 text-sm text-gray-600">Report You Want</label>
          <input list="endpoints" id="endpoint" name="endpoint" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          <datalist id="endpoints" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            {endpoints.map((single: any) => (<option key={single} value={single}>{single}</option>))}
          </datalist>
          <div className='w-full flex flex-row justify-between mt-4 bg-teal-400'>
            <label htmlFor="endpoint" className="leading-7 pt-2 text-lg text-white font-semibold  px-2">From</label>
            <input type="datetime-local" id="start" name="start" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <label htmlFor="endpoint" className="leading-7 pt-2 text-lg text-white text-lg font-semibold">To</label>
            <input type="datetime-local" id="end" name="end" className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
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
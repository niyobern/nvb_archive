import axios from 'axios';
import { useFormSubmit, Form} from 'next-runtime/form';
import { useState, useRef } from 'react';
import baseUrl from './baseUrl';

export default function LeaveForm({ fields, fieldnames, clicked, initial, token }: any){
    const data: {value: string, type: string}[] = fields

    return (
            <section className="text-gray-600 body-font justify-self-center w-full md:w-2/3 lg:w-1/2 mx-auto h-screen pt-12 md:pt-24 lg:pt-36">
              <Form className="container py-6 mx-auto bg-white" method="POST">
                <div className="flex lg:w-5/6 w-full px-8 flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start">
                  <div className="flex flex-col w-full">
                  {data.map((item, index) =>(
                    <div className="relative flex-grow w-full px-2" key={item.value}>
                      <label htmlFor={item.value} className="leading-7">{fieldnames[index]}</label>
                      <input type={item.type} id={item.value} required={true} name={item.value} className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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
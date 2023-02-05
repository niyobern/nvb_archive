import { useFormSubmit, Form } from 'next-runtime/form';
import Link from 'next/link';

export default function LoginComponent(){
    return (
<section className="text-gray-600 body-font justify-self-center w-full">
  <form className="container pt-0 mx-auto" method='POST' action='/'>
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="number"className="leading-7 text-sm text-gray-600">Your Phone Number</label>
          <input type="text" id="number" name="number" placeholder="078..." className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className="relative flex flex-col w-full h-20 justify-end">
        <div className="flex flex-row justify-between">
            <button type="submit" className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Submit</button>
        </div>
      </div>
    </div>
  </form>
</section>
    )
}
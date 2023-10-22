import React, { useEffect, useState } from 'react';
import GetStarted from './getstarted';
import axios from 'axios';

type Package = {
  key: string,
  name: string,
  points: string[],
  duration: number,
  period: string
}
const Pricing = () => {
  const [packages, setPackages] = useState<Package[]>([])
  const [selected, setSelected] = useState(0)
  useEffect( ()=> {
    axios.get("https://nvb_backend-1-z3745144.deta.app/subscription/package")
    .then(( res => setPackages(res.data)))
  }, [])
  function handleSelect(index: number){
    setSelected(index)
  }
  return (
    <div className='w-full md:px-12 text-white my-2'>
      <div className='w-11/12 h-[700px] absolute  bg-gradient-to-r from-green-600 from-20% via-emerald-600 via-40% to-cyan-600 to-40% mix-blend-overlay'></div>

      <div className='w-11/12 mx-auto py-12 z-10'>

        <div className='text-center py-8 text-white'>
          <h2 className='text-3xl uppercase'>Ibiciro</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Ibiciro bijyanye n'amikoro yawe</h3>
          <p className='text-3xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
        </div>

        <div className='grid md:grid-cols-3'>
        {
          packages.map((item: any, index: number) => (
          <div key={index} className='bg-white text-teal-900 m-4 p-8 rounded-xl shadow-2xl'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>{item.title}</span>
            <div>
              <p className='text-4xl font-bold py-4 flex'>FRW {item.item.item.cost}<span className='text-xl text-teal-500 flex flex-col justify-end'>{item.period}</span></p>
            </div>
            {/* <p className='text-2xl py-8 text-teal-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p> */}
            <div className='text-xl'>
            {item.points.map((item:   any, index: any) =><p key={index} className='flex py-2'><svg className="h-6 w-6 text-teal-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Lorem, ipsum dolor.</p>)}
                <button onClick={() => handleSelect(index + 1)} className='w-full py-4 my-4 bg-green-600 text-white'>Get Started</button>
            </div>
          </div>
          ))
        }
        {selected && <GetStarted title="Standard" select={handleSelect} id={packages[selected-1].key}/>}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
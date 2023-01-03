import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AddSingle from './addingSingleItems'

export default function ListItem({ items, links }: any){
    return (
        <section className="text-gray-600 body-font bg-sky-200 w-full">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-wrap -m-2">
        {items.map((item: string, index: number) => (
                <div className="p-2 md:w-1/3 w-full" key={item}>
                  <div className="h-full flex items-center border-sky-300 border z-40 p-4 rounded-lg bg-white">
                    <div className="flex flex-col w-full">
                      <div className='text-lg text-center font-semibold'><Link href={links[index]}>{item}</Link></div>
                    </div>
                  </div>
                </div>
        ))}
    </div>
  </div>
</section>
    )
}
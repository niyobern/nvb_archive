import Link from 'next/link'
export default function NiceTable(){
    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 md:w-1/3 w-full">
        <div className="h-full flex items-center border-sky-300 border z-40 p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex flex-col w-full">
            <h2 className="text-blue-900 title-font font-medium">Holden Caulfield</h2>
            <div className=" flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="text-gray-900">Senior Lecturer</p>
                  <p className="text-gray-900">Full Time</p>
                </div>
                <div className='justify-self-end flex flex-col justify-end'>
                    <Link href="/" className='text-green-800 font-bold'>Edit</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-1/3 w-full">
        <div className="h-full flex items-center border-sky-300 border z-40 p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex flex-col w-full">
            <h2 className="text-blue-900 title-font font-medium">Holden Caulfield</h2>
            <div className=" flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="text-gray-900">Senior Lecturer</p>
                  <p className="text-gray-900">Full Time</p>
                </div>
                <div className='justify-self-end flex flex-col justify-end'>
                    <Link href="/" className='text-green-800 font-bold'>Edit</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-1/3 w-full">
        <div className="h-full flex items-center border-sky-300 border z-40 p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex flex-col w-full">
            <h2 className="text-blue-900 title-font font-medium">Holden Caulfield</h2>
            <div className=" flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="text-gray-900">Senior Lecturer</p>
                  <p className="text-gray-900">Full Time</p>
                </div>
                <div className='justify-self-end flex flex-col justify-end'>
                    <Link href="/" className='text-green-800 font-bold'>Edit</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-1/3 w-full">
        <div className="h-full flex items-center border-sky-300 border z-40 p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex flex-col w-full">
            <h2 className="text-blue-900 title-font font-medium">Holden Caulfield</h2>
            <div className=" flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="text-gray-900">Senior Lecturer</p>
                  <p className="text-gray-900">Full Time</p>
                </div>
                <div className='justify-self-end flex flex-col justify-end'>
                    <Link href="/" className='text-green-800 font-bold'>Edit</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
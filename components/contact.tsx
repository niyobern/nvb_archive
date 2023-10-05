import Image from "next/image";
// import image from "../public/images/Rep 6.jpg";

export default function Contact(){
    return (
            <div className="flex flex-col h-fit md:grid grid-rows-6 grid-cols-2">
                <div className="row-start-1 col-span-full row-end-4 w-full pb-8 relative flex flex-col">
                    {/* <Image alt="Image" fill={true} src={image} className="object-fill"/> */}
                    <h1 className="py-8 self-center md:px-24 z-10 uppercase text-3xl font-semibold text-center" id="contact1">CONTACT US ABOUT ECOGENIUS SUPPORT</h1>
                    <p className="md:w-1/2 self-center z-10 text-center text-white bg-gray-900 bg-opacity-50" id="contact2">We love to show you how you can become succesfull, increase productivity lorem ipsum dolor sit amet due sit conseptuely</p>
                </div>
                <div className="row-start-4 col-span-full row-span-3 w-full bg-green-400 z-10 hidden md:flex"></div>
                <div className="row-start-3 col-span-full row-span-4 md:p-2 bg-gray-100 md:mx-24 z-20 flex flex-col md:grid grid-cols-5 grid-rows-2 gap-y-4 gap-x-8">
                    <div className="grid grid-cols-5 grid-rows-3 bg-white shadow col-start-1 col-span-2 row-start-1 py-10 gap-x-4 md:pl-12">
                        <div className="col-start-1 row-start-1 row-span-2 self-center pr-0 w-24">
                            <svg className="w-16 h-16 text-green-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                        </div>
                        <span className="col-start-2 col-span-4 row-span-1 self-center text-gray-600" id="contact3">Call us directly at</span>
                        <span className="col-start-2 col-span-4 row-span-1 self-center text-sky-600 text-xl font-bold leading-none" id="contact4">0786082841</span>
                        <div className="col-start-2 col-span-4 row-span-1 self-center text-sky-600 text-sm hover:bg-sky-600 hover:text-white active:bg-red-500 active:text-white w-fit py-2 hover:px-2 cursor-pointer rounded" id="contact5">See the numbers</div>
                    </div>
                    <div className="grid grid-cols-5 grid-rows-3 bg-white shadow col-start-1 col-span-2 row-start-2 py-10 md:pl-8">
                        <div className="col-start-1 row-start-1 row-span-2 self-center">
                            <svg className="h-16 w-16 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>
                        </div>
                        <span className="col-start-2 col-span-4 row-span-1 self-center text-gray-600 pl-2" id="contact7">Chat with our customer care</span>
                        <div className="col-start-2 col-span-4 row-span-2 self-center text-white bg-sky-600 cursor-pointer hover:bg-green-600 active:bg-red-500 py-2 px-6 justify-self-start" id="contact6">Chat with caring people</div>
                    </div>
                    <div className="flex flex-col col-start-3 col-span-3 row-span-2 bg-white shadow-xl pt-8">
                        <h1 className="text-xl font-bold self-center text-gray-800" id="contact8">Send us a message</h1>
                        <div className="text-sm sefl center text-center py-2" id="contact9">you can ask for help, book a meeting with our experts or give us a suggestion</div>
                        <div className="flex flex-col md:grid grid-cols-2 p-2 md:px-10 gap-2">
                            <div className="flex flex-col py-2">
                                <label htmlFor="firstName" className="pb-1 text-sm uppercase text-gray-700" id="contact13">FIRST NAME</label>
                                <input type="text" className="bg-gray-100 shadow border-b border-gray-200 rounded-sm outline-none appearance-none w-full leading-tight py-2 hover:shadow-sky-600" id="firstName"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="lastName" className="pb-1 text-sm uppercase text-gray-700" id="contact10">LAST NAME</label>
                                <input type="text" className="bg-gray-100 shadow border-b border-gray-200 rounded-sm outline-none appearance-none w-full leading-tight py-2 hover:shadow-sky-600" id="lastName"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="email" className="pb-1 text-sm uppercase text-gray-700" id="contact11">EMAIL</label>
                                <input type="email" className="bg-gray-100 shadow border-b border-gray-200 rounded-sm outline-none appearance-none w-full leading-tight py-2 hover:shadow-sky-600" id="email"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="phone" className="pb-1 text-sm uppercase text-gray-700" id="contact12">PHONE NUMBER</label>
                                <input type="tel" className="bg-gray-100 shadow border-b border-gray-200 rounded-sm outline-none appearance-none w-full leading-tight py-2 hover:shadow-sky-600" id="phone"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="message" className="pb-1 text-sm uppercase text-gray-700" id="contact14">MESSAGE</label>
                                <textarea className="bg-gray-100 shadow border-b border-gray-200 rounded-sm outline-none appearance-none w-full leading-tight py-1 h-20 hover:shadow-sky-600" id="message"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="message" className="pb-1 text-sm uppercase invisible">Messsage</label>
                                <div className="bg-sky-600 rounded hover:bg-green-600  active:bg-red-500 h-20 cursor-pointer w-full text-xl font-bold uppercase text-white text-center flex items-center justify-center" id="contact15">text 67</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
import { useRouter } from "next/router"
import Image from "next/image"
import Logo from '../public/images/logo.webp'

export default function Card({ items }: any){
  const data: any = items && items[0]
  const router = useRouter()
    return (       
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-blue-500 py-6 sm:py-12">
  <div className="relative bg-white px-0 w-[440px] h-[270px] py-0 shadow-xl ring-1 ring-gray-900/5 mx-auto  rounded-lg">
  <div className="flex flex-row ">
    <div>
      <div className="flex flex-row w-full h-16 pl-1 mx-0  my-2">
    <div><Image className="w-14 h-14 rounded-full mt-2" alt="Logo" src={Logo} width={56} height={56}/></div>
    <div className="flex flex-col py-2 px-0 h-full">
      <div className="align-middle text-center font-bold tex mx-1 text-lg text-blue-600"> Catholic University of Rwanda</div>
      <div className="text-center font-bold underline text-green-800">Employee Card</div>
    </div>
  </div>
  <div className="flex flex-row">
  <div className="flex flex-col w-full mx-2 my-2 h-28">
    <div className="w-full py-1"><span className="font-bold uppercase text-lg">Names:</span><span className="font-semibold text-gray-700 text-lg"> {data && data.name}</span></div>
    <div className="w-full py-1"><span className="font-bold uppercase text-lg">Position:</span><span className="font-semibold text-gray-700 text-lg"> {data && data.position}</span></div>
    <div className="w-full py-1"><span className="font-bold uppercase text-lg">Department:</span><span className="font-semibold text-gray-700 text-lg"> {data && data.department}</span></div>
    <div className="w-full py-1"><span className="font-bold uppercase text-lg">Type:</span><span className="font-semibold text-gray-700 text-lg"> {data && data.type}</span></div>
    <div className=""></div>
    <div className="w-full py-1"><span className="font-bold uppercase text-gray-600">Validity:</span><span className="font-semibold text-gray-600 text-lg"> 2022-2023</span></div>
    <div className=""></div>
  </div>
  </div>
  </div>
  <div>
      <div className="flex flex-col h-full relative justify-between">
      <div className="mx-0 px-0 mt-1"> <Image alt="Picture" src={data && data.image} height={128} width={112}/></div>
      <div className="mx-0 px-0 py-0 mt-1 w-28 h-32 overflow-hidden object-cover"> <Image alt="qr_code" src={data && data.qr} height={200} width={200}/></div>
    </div>
  </div>
  </div>
  </div>
</div>

    )
}
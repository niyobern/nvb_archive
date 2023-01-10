export default function FormResponse({ clicked, formResponse }: any){
    return (
<section className="text-lg body-font justify-self-center w-full">
  <div className="container py-6 mx-auto">
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex flex-col w-full h-20 justify-end">
        <div className="flex flex-row justify-between">
            <div>{formResponse}</div>
            <button onClick={() => clicked(false)} type="reset" className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Close</button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
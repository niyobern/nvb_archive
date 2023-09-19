export default function Add(){
    return (
    <div className="bg-blue-400 h-full w-full rounded shadow shadow-blue-400">
        <form className="flex flex-col gap-2 m-12">
            <label htmlFor="title" className="text-lg font-medium font-teal-800">Section Title</label>
            <input type="text" id="fname" name="title" className="rounded p-2"/>
            <label htmlFor="w3review">Review of W3Schools:</label>
            <textarea id="w3review" name="w3review"></textarea>
        </form>
    </div>
    )
}
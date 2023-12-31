import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

export default function Create({ handle }: any){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  };

  const handleUploadClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ( title === "" || description === "") {
      return;
    }

    axios.post("https://nvb_backend-1-z3745144.deta.app/lesson", {"title": title, "description": description})
      .then((data) => handle(data.data))
      .catch((err) => console.error(err));
  };
    return (
    <div className="bg-blue-400 h-full w-full rounded shadow shadow-blue-400 flex flex-col content-center">
        <h1 className='text-white text-2xl font-bold text-center mt-2'>New Lesson</h1>
        <form className="flex flex-col gap-4 m-12" onSubmit={handleUploadClick}>
            <label htmlFor="title" className="text-lg font-medium">Lesson Title</label>
            <input type="text" id="title" name="title" className="rounded p-2" onChange={handleTitleChange} value={title}/>
            <label htmlFor="description" className="text-lg font-medium">Lesson Description</label>
            <textarea id="description" name="description" className="h-48 w-full rounded" onChange={handleDescriptionChange} value={description}/>
            <button type='submit' className="bg-gray-200 text-xl font-medium rounded p-2 hover:shadow-lg hover:bg-teal-200 hover:shadow-gray-500">Create</button>
        </form>
    </div>
    )
}


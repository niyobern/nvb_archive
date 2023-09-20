import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Create(){
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

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)

    axios.post("https://reponv-1-d0312461.deta.app/content", formData)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
    return (
    <div className="bg-blue-400 h-full w-full rounded shadow shadow-blue-400 flex flex-col content-center">
        <h1 className='text-white text-2xl font-bold text-center mt-2'>New Lesson</h1>
        <form className="flex flex-col gap-2 m-12" onSubmit={handleUploadClick}>
            <label htmlFor="title" className="text-lg font-medium">Lesson Title</label>
            <input type="text" id="title" name="title" className="rounded p-2" onChange={handleTitleChange} value={title}/>
            <label htmlFor="description" className="text-lg font-medium">Lesson Description</label>
            <textarea id="description" name="description" className="h-48 w-full rounded" onChange={handleDescriptionChange} value={description}/>
            <button type='submit' className="bg-gray-200 text-xl font-medium rounded p-2 hover:shadow-lg hover:bg-teal-200 hover:shadow-gray-500">Upload</button>
        </form>
    </div>
    )
}


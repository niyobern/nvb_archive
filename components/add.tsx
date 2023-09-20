import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

export default function Add({ lesson_key, lesson_title, handle }: any){
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  };
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  };

  const handleUploadClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file || title === "" || content === "") {
      return;
    }

    const formData = new FormData()
    formData.append("title", title)
    formData.append("content", content)
    formData.append("file", file)
    formData.append("lesson_key", lesson_key)

    axios.post("https://nvb_backend-1-z3745144.deta.app/content", formData)
      .then((data) => alert("done"))
      .catch((err) => console.error(err));
  };
  const handleFinalClick = (e: any) => {
    e.preventDefault()
    if (!file || title === "" || content === "") {
      return;
    }

    const formData = new FormData()
    formData.append("title", title)
    formData.append("content", content)
    formData.append("file", file)
    formData.append("lesson_key", lesson_key)

    axios.post("https://nvb_backend-1-z3745144.deta.app/content", formData)
      .then(() => handle())
      .catch((err) => console.error(err));
  };
    return (
    <div className="flex flex-col content-center">
        <h1 className='text-white text-2xl font-bold text-center mt-2'>{lesson_title}</h1>
        <form className="flex flex-col gap-2 m-12" onSubmit={handleUploadClick}>
            <label htmlFor="title" className="text-lg font-medium">Section Title</label>
            <input type="text" id="title" name="title" className="rounded p-2" onChange={handleTitleChange} value={title}/>
            <label htmlFor="content" className="text-lg font-medium">Section Content:</label>
            <textarea id="content" name="content" className="h-48 w-full rounded" onChange={handleContentChange} value={content}/>
            <div className="flex flex-col text-white">
              <input type="file" onChange={handleFileChange} name="file" id="file"/>
              {/* <div>{file && `${file.name} - ${file.type}`}</div> */}
            </div>
            <div className="flex flex-row gap-4 justify-between">
                <button type='submit' className="bg-gray-200 w-full text-xl font-medium rounded p-2 hover:shadow-lg hover:bg-teal-200 hover:shadow-gray-500">Next</button>
                <button onClick={handleFinalClick} className="bg-gray-200 w-full text-xl font-medium rounded p-2 hover:shadow-lg hover:bg-teal-200 hover:shadow-gray-500">Finish</button>
            </div>
        </form>
    </div>
    )
}


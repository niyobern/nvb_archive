import { ChangeEvent, useState } from 'react';
import axios from 'axios';

export default function Add(){
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

  const handleUploadClick = () => {
    if (!file || title === "" || content === "") {
      return;
    }

    const formData = new FormData()
    formData.append("title", title)
    formData.append("content", content)
    formData.append("file", file)

    axios.post("https://reponv-1-d0312461.deta.app/content", formData)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
    return (
    <div className="bg-blue-400 h-full w-full rounded shadow shadow-blue-400">
        <form className="flex flex-col gap-2 m-12">
            <label htmlFor="title" className="text-lg font-medium font-teal-800">Section Title</label>
            <input type="text" id="title" name="title" className="rounded p-2" onChange={handleTitleChange} value={title}/>
            <label htmlFor="content">Section Content:</label>
            <textarea id="content" name="content" className="h-48 w-full" onChange={handleContentChange} value={content}/>
            <div className="flex flex-col">
              <input type="file" onChange={handleFileChange} name="file" id="file"/>
              <div>{file && `${file.name} - ${file.type}`}</div>
            </div>
            <button onClick={handleUploadClick}>Upload</button>
        </form>
    </div>
    )
}


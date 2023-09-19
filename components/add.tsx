import { ChangeEvent, useState } from 'react';

export default function Add(){
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
    return (
    <div className="bg-blue-400 h-full w-full rounded shadow shadow-blue-400">
        <form className="flex flex-col gap-2 m-12">
            <label htmlFor="title" className="text-lg font-medium font-teal-800">Section Title</label>
            <input type="text" id="fname" name="title" className="rounded p-2"/>
            <label htmlFor="w3review">Review of W3Schools:</label>
            <textarea id="w3review" name="w3review" className="h-48 w-full"/>
            <div>
              <input type="file" onChange={handleFileChange} />
        
              <div>{file && `${file.name} - ${file.type}`}</div>
        
              <button onClick={handleUploadClick}>Upload</button>
            </div>
        </form>
    </div>
    )
}


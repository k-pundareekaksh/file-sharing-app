import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import { uploadFile } from './service/api';

function App() {

    const [file, setFile] = useState('');
    const [result, setResult] = useState('');

    console.log(file);
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    }

    const fileInputRef = useRef(0);
    const onUploadClick = () => {
      fileInputRef.current.click();
    }

    useEffect(() => {
        const getImage = async () => {
          if(file) {
            try {
              const data = new FormData();
              data.append('name', file.name)
              data.append('file', file)

              const response = await uploadFile(data);
              setResult(response.path);
              console.log(response.path);
            } catch (error) {
              console.log(error.message);
            }
          }
        };
        
        getImage();
    }, [file]);


    return (
      <>
        <div className='main-wrapper' style={{ backgroundImage: `url("https://images.pexels.com/photos/63553/pexels-photo-63553.jpeg")` }}>
          <div className='container'>
            <div className='wrapper'>
              <h1>File Sharing App!</h1>
              <p>Upload and share your files with ease!</p>
              <button onClick={onUploadClick}>Upload</button>
              <input multiple={false} ref={fileInputRef} type='file' onChange={handleFileChange} style={{ display: "none" }} />

              {result && 
                (<div className = "result">
                  <a href={result} target="_blank" rel="noreferrer">
                    {result}
                  </a>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </>
    )
}

export default App

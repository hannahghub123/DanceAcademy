import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoUpload = () => {
    const [videoInput,setVideoInput] = useState(null);
    const [desc,setDesc] = useState(null);
    const {id} = useParams()

    const handleVideoUpload = (e)=>{
        const file = e.target.files[0];
        setVideoInput(file);
    }

    const handleVideoSubmit = async(e)=>{
        console.log("video uploading..");
        e.preventDefault();

        const formData = new FormData();
        formData.append('video',videoInput)
        formData.append('description',desc)
        
        try {
            const response = await axios.post(`http://localhost:8000/tutor/video-upload/${id}`,formData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                },
                params: {
                    resource_type: 'video',
                },
            });
            console.log(response.data,"###########");
            console.log('Video uploaded:',  response.data.url);
            setVideoInput(null);
            setDesc(null);
        } catch (error) {
            console.error("Error Uploading Video :",error)
        }
    }

  return (
    <div className="video-upload-container">
      <h1>Upload Your Video</h1>
      <form onSubmit={handleVideoSubmit} className="video-upload-form">
        <label htmlFor="video-upload-input" className="video-input-label">
          Choose a Video:
        </label>
        <input
          type="file"
          id="video-upload-input"
          accept="video/*"
          name="video"
          onChange={handleVideoUpload}
          className="video-input"
        />
        <input
          type="text"
          placeholder="Video Description"
          onChange={(e) => setDesc(e.target.value)}
          className="description-input"
        />
        <button className="video-upload-btn" type="submit">
          Upload Video
        </button>
      </form>
    </div>
  )
}

export default VideoUpload
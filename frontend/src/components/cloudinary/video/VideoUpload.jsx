import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoUpload = () => {
    const [videoInput,setVideoInput] = useState(null);
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
        formData.append('id',id)
        try {
            const response = await axios.post('http://localhost:8000/tutor/video-upload/',formData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                },
            });
            console.log('Video uploaded:', response.data.video_url);
            setVideoInput(null);
        } catch (error) {
            console.error("Error Uploading Video :",error)
        }
    }

  return (
    <>
        <h1>hi upload your video here</h1>
        <form onSubmit={handleVideoSubmit} className='form'>
            <input 
            type="file"
            accept="video/*"
            name="video"
            onChange={handleVideoUpload}
            className='form-input' 
            />
            <button className="btn" type='submit'>Video Upload</button>
        </form>
    </>
  )
}

export default VideoUpload
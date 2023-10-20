import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Courses.css'

const RelatedVideos = () => {

    const {id} = useParams()
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        const datas ={
            id:id
        }
        axios.get("http://localhost:8000/std/video-lists/",datas)
        .then((res)=>{
            console.log(res.data,"related videoss #######");
            setVideos(res.data.video_urls)
        })
        .catch((error)=>{
            console.error("error fetching videos - ", error);
        })
    },[])

  return (
    <>
        <h1><b>Most Popular Tutor Uploads</b></h1>
        <div className='video-container'>
        {videos.map((videoUrl, index) => (
          <div key={index}>
            <video width="300" height="200" controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </>
  )
}

export default RelatedVideos
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


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
        <h1>Related Video ivdunn verum</h1>
        <ul>
        {videos.map((videoUrl, index) => (
          <li key={index}>
            <video width="300" height="200" controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RelatedVideos
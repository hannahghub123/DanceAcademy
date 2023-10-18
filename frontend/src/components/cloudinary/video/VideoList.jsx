import axios from 'axios';
import React, { useEffect, useState } from 'react'

const VideoList = () => {
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/tutor/video-lists/")
        .then((res)=>{
            console.log(res.data,"Videosssss");
            console.log("videourlss",res.data.video_urls);
            setVideos(res.data.video_urls)
        })
        .catch((error)=>{
            console.error("error fetching videos - ", error);
        })
    },[])

    console.log("video state",videos);
  return (
    <>
        <h2>Videos By - </h2>
      <ul>
        {videos.map((videoUrl, index) => (
          <li key={index}>
            <video width="320" height="240" controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </li>
        ))}
      </ul>
    </>
  )
}

export default VideoList
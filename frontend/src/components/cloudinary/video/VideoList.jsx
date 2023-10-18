import axios from 'axios';
import React, { useEffect, useState } from 'react'

const VideoList = () => {
    const [videos,setVideos] = useState([]);
    const [data,setData] = useState('');

    useEffect(()=>{
        const tutorData = localStorage.getItem("tutorDetails")
        setData(JSON.parse(tutorData))


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
        <h2>Videos By - {data.name} </h2>
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

export default VideoList
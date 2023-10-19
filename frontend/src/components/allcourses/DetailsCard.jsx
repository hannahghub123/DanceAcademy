import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../axios/tutoraxios'
import Heading from '../common/heading/Heading'
import RelatedVideos from './RelatedVideos'

// component displaying the related tutor details

const DetailsCard = () => {

    const [details,setDetails] = useState([])

    const navigate = useNavigate()

    const {id} = useParams()
    

    useEffect(()=>{
        axiosInstance.get(`tdetails/${id}`)
        .then((res)=>{
            console.log(res.data,"hi t data")
            setDetails(res.data)
        })
    },[]) 

    const [isUploadComponentVisible, setIsUploadComponentVisible] = useState(false);
    const videoDisplayHandle = () => {
        setIsUploadComponentVisible(!isUploadComponentVisible);
      };

  return (
    <>
        <section className='online'>
            <div className="container">
                <Heading subtitle='COURSE-DETAILS' title='Browse Our Course Details'/>

                <div className="content grid3">
                    {details.map((val)=>(
                        <div className="box">
                            <div className="img">
                                <img src={val.image} alt="" />
                            </div>
                            <h1>{val.name}</h1>
                            <p>{val.qualification}/{val.expertise} yr expertise</p>
                        
                            <span onClick={videoDisplayHandle}>Top Uploads</span>
                        </div>
                    ))}
                </div>
                <>
                {isUploadComponentVisible ? (
                        <><RelatedVideos /></>  
                        ) : null}
                </>
                </div>
        </section>
    </>
  )
}

export default DetailsCard
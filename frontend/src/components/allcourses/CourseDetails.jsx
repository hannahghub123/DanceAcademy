import React, { useEffect, useState } from 'react'
import Back from '../common/back/Back'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axios/tutoraxios'
import DetailsCard from './DetailsCard'

// to show the related tutor details of a particular course - routing "DetailsCard" for displaying the details

const CourseDetails = () => {
    const {id} = useParams()
    const [data,setData] = useState("")

    useEffect(()=>{
        axiosInstance.get(`course-details/${id}`)
        .then((res)=>{
            console.log(res.data,"hi courses-details data")
            setData(res.data)
        })
    },[]) 

    console.log(data,"heyyyy");

  return (
    <>
    <Back title={data.title} />
        <DetailsCard/>
        <br />
        <br />
    </>
  )
}

export default CourseDetails
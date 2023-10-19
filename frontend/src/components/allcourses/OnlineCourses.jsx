import React, { useEffect, useState } from 'react'
import Heading from '../common/heading/Heading'
import axiosInstance from '../../axios/tutoraxios'
import { useNavigate } from 'react-router-dom'

// to show the courses available 

const OnlineCourses = () => {

    const [courses,setCourses] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.get('courses/')
        .then((res)=>{
            console.log(res.data,"hi courses data")
            setCourses(res.data)
        })
    },[]) 

    const courseHandle=(id)=>{
        navigate(`../course-details/${id}`)
    }


  return (
    <>
        <section className='online'>
            <div className="container">
                <Heading subtitle='COURSES' title='Browse Our Online Courses'/>

                <div className="content grid3">
                    {courses.map((val)=>(
                        <div className="box" onClick={()=>courseHandle(val.id)}>
                            <div className="img">
                                <img src={val.image} alt="" />
                                {/* <img src={val.hoverCover} alt="" className='show' /> */}
                            </div>
                            <h1>{val.title}</h1>
                            <p>{val.description}</p>
                            <span>{val.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCourses
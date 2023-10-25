import React, { useEffect, useState } from 'react'
import { coursesCard } from '../../dummydata'
import './Courses.css'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios/tutoraxios'

// displaying course plans - the big cards 

const CoursesCard = () => {

    const {id} = useParams()
    const [cdata,setCdata] = useState([]);

    useEffect(()=>{
        const datas = {
            id:id
        }
        axiosInstance.post("course-structure/",datas)
        .then((res)=>{
            console.log(res.data,"hi hey you");
            setCdata(res.data)
        })
    },[])

  return (
    <>
        <section className='coursesCard'>
            <div className="container grid2">
                {cdata.map((val)=>{
                   return (
                   <div className="items">
                        <div className="content flex">
                            <div className="left">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                            </div>
                            <div className="text">
                                <h3 key={val.id}>{val.title}</h3>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <label htmlFor="">(5.0)</label>
                                </div>
                                <h6><i class='fas fa-hand-point-right icon'></i> {val.levels} </h6>
                                <h6><i class='fas fa-hand-point-right icon'></i> {val.duration} min/Class </h6>
                                <h6><i class='fas fa-hand-point-right icon'></i> {val.num_of_classes} Online Classes</h6>
                                {/* <h6>{val.description} </h6> */}
                                {/* <div className="details">
                                    {val.courTeacher.map((details)=>(
                                        <>
                                        <div className="box">
                                            <div className="dimg">
                                                <img src={details.dcover} alt="" />
                                            </div>
                                            <div className="para">
                                                <h4>{details.name}</h4>
                                            </div>
                                        </div>
                                        <span>{details.totalTime}</span>
                                        </>
                                    ))}
                                </div> */}
                            </div>
                        </div>
                        <div className="price">
                            <h3>{val.price} / {val.price_per} </h3>
                        </div>
                        <button className='outline-btn'>ENROLL NOW !</button>
                    </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default CoursesCard
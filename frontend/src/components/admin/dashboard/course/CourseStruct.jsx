import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../../../axios/tutoraxios';
import Table from 'react-bootstrap/Table';
import Sidebar from '../../sidebar/Sidebar';

const CourseStruct = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const dashSubmit = ()=>{
        navigate(`../admin/course/${id}`)
    }

    const [values,setValues] = useState([]);
    useEffect(()=>{
        axiosInstance.get(`course-struct/${id}`)
        .then((res)=>{
            console.log(res.data,"course struct data ahn")
            setValues(res.data)
        })
    },[id])

  return (
    <>
      
      <Sidebar/>
      CourseStruct 
        <br />
           <button onClick={dashSubmit}>back to course</button>
<br /> <br />
<div className='container' style={{maxWidth:"1000px"}}>
           <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>LEVEL</th>
            <th>DESCRIPTION</th>
            <th>DURATION</th>
            <th>NO. OF CLASSES</th>
            <th>PRICE</th>
           
    
          </tr>
        </thead>
        <tbody>
        {values.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.levels}</td>
            <td>{item.description}</td>
            <td>{item.duration}</td>
            <td>{item.num_of_classes}</td>
            <td>{item.price}</td>
           
          </tr> ))}
        </tbody>
      </Table>
      </div>
    </>
  )
}

export default CourseStruct
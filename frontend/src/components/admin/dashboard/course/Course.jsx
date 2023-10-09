import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../../../axios/tutoraxios';
import Table from 'react-bootstrap/Table';

const Course = () => {
    const {id} = useParams();
    console.log("id course il kitty",id)
    const navigate = useNavigate();
    const dashSubmit = ()=>{
        navigate('../admin-dashboard')
    }
    const cstructSubmit = (id) =>{
        navigate(`../course-struct/${id}`)
      }
      const catSubmit = ()=>{
        navigate('../course-category/')
      }

      const [values,setValues] = useState([]);

      useEffect(()=>{
        axiosInstance.get(`course/${id}`)
        .then((res)=>{
            console.log(res.data,"course data ahn ithu")
            setValues(res.data)
        })
      },[id])
      
  return (

    <div>Course
       
        <br />
         
        <br />

           <button onClick={dashSubmit}>back to dashboard</button>
           <button onClick={catSubmit}>back to catgeory</button>
<br />
           <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
        {values.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td> 
            {/* <button onClick={()=>courseSubmit(item.id)}>Course</button> */}
            {item.category}
            </td>
            <td><button onClick={()=>cstructSubmit(item.id)}>Course Structure</button></td>
          </tr> ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Course
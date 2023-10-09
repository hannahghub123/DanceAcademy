import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../../axios/tutoraxios';
import Table from 'react-bootstrap/Table';


const CourseCategory = () => {
    const navigate = useNavigate();
    const dashSubmit = ()=>{
        navigate('../admin-dashboard')
    }

    const courseSubmit = (id) =>{
        console.log(id,"id vannu course il");
        navigate(`../course/${id}`)
    }

    const [values,setValues] = useState([])

    useEffect(()=>{
    axiosInstance.get('course-cat/')
    .then((res)=>{
        setValues(res.data);
        console.log(res.data,"course categories");
        console.log(values);
    })
    .catch((err)=>{
        console.log(err,"error-category")
    })
    },[])

  return (

    <div>CourseCategory
         
        <br />
        {/* <button onClick={courseSubmit}>Course</button> */}
       
           <button onClick={dashSubmit}>back to dashboard</button>
<br /> <br />
           <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
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
            <button onClick={()=>courseSubmit(item.id)}>Course</button>

            </td>
          </tr>))}
        </tbody>
      </Table>
    </div>
  )
}

export default CourseCategory
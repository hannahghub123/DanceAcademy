import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../../../axios/tutoraxios';
import Table from 'react-bootstrap/Table';

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
    <div>CourseStruct
        <br />
           <button onClick={dashSubmit}>back to course</button>
<br /> <br />
           <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>DURATION</th>
            <th>FEES</th>
            <th>COURSE</th>
    
          </tr>
        </thead>
        <tbody>
        {values.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.duration}</td>
            <td>{item.fees}</td>
            <td>{item.course}</td>
          </tr> ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CourseStruct
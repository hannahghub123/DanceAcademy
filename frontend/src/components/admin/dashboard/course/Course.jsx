import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../../axios/tutoraxios';
import Table from 'react-bootstrap/Table';
import Sidebar from '../../sidebar/Sidebar';
import Head from '../../head/Head';

const Course = () => {
    // const {id} = useParams();
    // console.log("id course il kitty",id)
    const navigate = useNavigate();

    const cstructSubmit = (id) =>{
        navigate(`../admin/course-struct/${id}`)
      }

      const [values,setValues] = useState([]);

      useEffect(()=>{
        axiosInstance.get('courses/')
        .then((res)=>{
            console.log(res.data,"course data ahn ithu")
            setValues(res.data)
        })
      },[])
      
  return (

    <>
    <Head title="Course Details"/>
      <Sidebar/>
       
        <br />
         
        <br />
<br />

<div className='container' style={{maxWidth:"1000px"}}>
           <Table >
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th >DESCRIPTION</th>

            <th>-</th>
          </tr>
        </thead>
        <tbody>
        {values.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td style={{maxWidth:"400px"}}>{item.description}</td>
    
            <td><button onClick={()=>cstructSubmit(item.id)}>Course Structure</button></td>
          </tr> ))}
        </tbody>
      </Table>

      </div>
    </>
  )
}

export default Course
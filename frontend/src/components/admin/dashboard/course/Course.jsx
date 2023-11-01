import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../../axios/tutoraxios';
import Table from 'react-bootstrap/Table';
import Sidebar from '../../sidebar/Sidebar';
import Head from '../../head/Head';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Course = () => {

    const navigate = useNavigate();

    const cstructSubmit = (id) =>{
        navigate(`../admin/course-struct/${id}`)
      }

      const [values,setValues] = useState([]);
      const [courseDetails,setCourseDetails] = useState(false);  
      const [courseId,setCourseId] = useState(null);  

      useEffect(()=>{
        axiosInstance.get('courses/')
        .then((res)=>{
            console.log(res.data,"course data ahn ithu")
            setValues(res.data)
        })
      },[])

      const courseEditHandle = (id)=>{
        // setCourseId(id)
        setCourseDetails(!courseDetails)
      }
      
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
            <th></th>
            <th >DESCRIPTION</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
        {values.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>
            <span className='ml-4' onClick={()=>courseEditHandle(item.id)}><i class="fa-solid fa-pen"></i></span>
            </td>
            <td style={{maxWidth:"400px"}}>{item.description}</td>
    
            <td><button onClick={()=>cstructSubmit(item.id)}>Course Structure</button></td>
          </tr> ))}
        </tbody>
      </Table>

      </div>
      {courseDetails?
          <div
          className="modal"
          style={{ display: 'block', position: 'fixed', marginTop:"20px" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton onClick={courseEditHandle}>
              <Modal.Title>Edit Course Details </Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <input 
              type="text" 
              placeholder='Title' 
              // value={}
              style={{width:"100%",height:"40px",marginBottom: "10px"}}/>
              <br /> 
              <input type="text" placeholder='Description' style={{width:"100%",height:"40px",marginBottom: "10px"}}/>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      :null}
    </>
  )
}

export default Course
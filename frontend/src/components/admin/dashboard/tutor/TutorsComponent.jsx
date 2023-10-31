import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import Head from '../../head/Head';
import axiosInstance from '../../../../axios/tutoraxios';
import { Link } from 'react-router-dom';
import Alert from '@mui/joy/Alert';


const TutorsComponent = () => {
    const navigate = useNavigate()
    const [tutordetails,setTutordetails] = useState([])
    const [ approveStatus, setApproveStatus] = useState(false)

    const dashSubmit = ()=>{
        navigate('../admin/admin-dashboard')
    }
  
    useEffect(() => {
      axiosInstance.get("tutor-details/")
      .then((response)=>{
        setTutordetails(response.data)
      })
    }, [approveStatus]);

    const approveHandle = (id)=>{
      const values = {
        id:id,
      }
      axiosInstance.post("status-edit/",values)
      .then((res)=>{
        console.log(res.data);
        setApproveStatus(!approveStatus)
      })
    }


  return (
    <>
     <Head title="Tutors Details"/>
      <Sidebar/>
        <br /> <br />
       <br />
       <div className='container'  style={{maxWidth:"1200px"}}>
      <Table responsive="sm" style={{marginLeft:"40px",marginTop:"10px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>USERNAME</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>EXPERTISE</th>
            <th>QUALIFICATION</th>
            <th>PASSWORD</th>
            <th>IS APPROVED</th>
          </tr>
        </thead>
        <tbody>
        {tutordetails.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <img src={item.image} alt="" style={{width:60,maxHeight:60}}/>
            </td>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.expertise}</td>
            <td>{item.qualification}</td>
            <td>{item.password}</td>
            <td>
              {/* approval confirmation ? */}
              {!(item.is_approved) && <Link onClick={()=>approveHandle(item.id)}>Approve</Link>}
              {(item.is_approved) && <Link onClick={()=>approveHandle(item.id)} style={{color:"red"}}>Restrict</Link>}
            </td>
          </tr>))}
        </tbody>
      </Table>
      </div>
      
    </>
  )
}

export default TutorsComponent
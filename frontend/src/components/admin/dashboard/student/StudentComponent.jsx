import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axiosInstance from '../../../../axios/stdaxios';
import Sidebar from '../../sidebar/Sidebar';
import './StudentComponent.css'
import { Link } from 'react-router-dom';
import Head from '../../head/Head';

const StudentComponent = () => {

    const [stdDetails, setStdDetails] = useState([]);
    const [statusUpdate, setStatusUpdate] = useState(false);
  
    useEffect(() => {
      axiosInstance.get("std-details/")
      .then((response)=>{
        setStdDetails(response.data);
      })
  
    }, [statusUpdate]);

    const blockHandle =(id)=>{
      const datas={
        id:id,
      }
      axiosInstance.post("status-block/",datas)
      .then((res)=>{
        console.log(res.data,"block handle?");
        setStatusUpdate(!statusUpdate)
      })
    }

    const unblockHandle =(id)=>{
      const datas={
        id:id,
      }
      axiosInstance.post("status-unblock/",datas)
      .then((res)=>{
        console.log(res.data,"unblocked handle?");
        setStatusUpdate(!statusUpdate)
      })
    }





  return (
    <>
     <Head title="Student Details"/>
      <Sidebar/>
        
      

 <br /><br />
 <h1></h1>
 <br />
 <div className="table-container" style={{maxWidth:"1000px"}}>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>SCORE</th>
            <th>PASSWORD</th>
            <th>STATUS</th>

          </tr>
        </thead>
        <tbody>
        {stdDetails.map((item) => (
        <tr>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.score}</td>
            <td>{item.password}</td>

            <td>
              {/* confirmation? */}
              {!(item.status) && <Link onClick={()=>blockHandle(item.id)} style={{color:"red"}}>Block</Link>}
             {(item.status) && <Link onClick={()=>unblockHandle(item.id)} style={{color:"green"}}>Unblock</Link>}
            </td>
           
          </tr>))}
        </tbody>
      </Table>
      <br />
      </div>

          



    </>
  )
}

export default StudentComponent
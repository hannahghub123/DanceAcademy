import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const StudentComponent = () => {
    const navigate = useNavigate()
    const dashSubmit = ()=>{
        navigate('../admin/admin-dashboard')
    }

    const [stdDetails, setStdDetails] = useState(localStorage.getItem("stdData"));
    console.log("stdData>>>>>",localStorage.getItem("stdData"))

    const data = JSON.parse(localStorage.getItem("stdData"))
  
    useEffect(() => {
      const stdDetails = localStorage.getItem("stdData");
      if (stdDetails) {
        const parseData = JSON.parse(stdDetails);
        console.log(parseData, "#############");
        console.log("HANNAA");
        setStdDetails(parseData);
      }
    }, []);
  return (
    <div>
        <br />
           <button onClick={dashSubmit}>back to dashboard</button>
      

 <br /><br />
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>USERNAME</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>SCORE</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
        <tr>
            <td>#</td>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.score}</td>
            <td>{item.password}</td>
          </tr>))}
        </tbody>
      </Table>






    </div>
  )
}

export default StudentComponent
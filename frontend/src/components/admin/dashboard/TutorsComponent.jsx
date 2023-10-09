import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const TutorsComponent = () => {
    const navigate = useNavigate()
    const dashSubmit = ()=>{
        navigate('../admin-dashboard')
    }

    const [tutorDetails, setTutorDetails] = useState(localStorage.getItem("tutorData"));
    console.log("tutorData>>>>>",localStorage.getItem("tutorData"))

    const data = JSON.parse(localStorage.getItem("tutorData"))
  
    useEffect(() => {
      const tutorDetails = localStorage.getItem("tutorData");
      if (tutorDetails) {
        const parseData = JSON.parse(tutorDetails);
        console.log(parseData, "#############");
        console.log("HANNAA");
        setTutorDetails(parseData);
      }
    }, []);
  return (
    <div>
        <br />
        <button onClick={dashSubmit}>back to dashboard</button>
       <br /> <br />
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
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
        {data.map((item) => (
        <tr>
            <td>#</td>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.expertise}</td>
            <td>{item.qualification}</td>
            <td>{item.password}</td>
            <td>-</td>
          </tr>))}
        </tbody>
      </Table>
    </div>
  )
}

export default TutorsComponent
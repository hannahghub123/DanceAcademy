import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate()
  const logoutSubmit = ()=>{
    localStorage.removeItem("adminAccessToken");
    localStorage.removeItem("adminData");
    localStorage.removeItem("stdData");
    localStorage.removeItem("tutorData");
    navigate('../adminlogin/')
  }
  return (
    <div>
      <br />
      <Sidebar/>
      <button onClick={logoutSubmit}>logout</button>
    </div>
  )
}

export default AdminDashboard
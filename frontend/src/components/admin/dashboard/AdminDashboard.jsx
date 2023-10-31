import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import Head from '../head/Head';


const AdminDashboard = () => {

  return (
    <>
  <Head title="Admin Dashboard"/>
      <Sidebar/>
      {/* <button onClick={logoutSubmit}>logout</button> */}
    </>
  )
}

export default AdminDashboard
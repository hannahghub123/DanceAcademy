import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../common/back/Back';

const StudentDashboard = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("accessToken-S");
        localStorage.removeItem("stdDetails");

        navigate('../');
    }

  return (
    <div>
      <Back title='Student Dashboard'/>
        <h1>Heyya we are up as Student!!</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default StudentDashboard
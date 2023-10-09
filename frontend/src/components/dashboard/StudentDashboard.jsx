import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavComponent from '../navbar/NavComponent';

const StudentDashboard = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("accessToken-S");
        localStorage.removeItem("stdDetails");

        navigate('../');
    }

  return (
    <div>
      <NavComponent/>
        <h1>Heyya we are up as Student!!</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default StudentDashboard
import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavComponent from '../navbar/NavComponent';

const Dashboard = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("accessToken-T");
        localStorage.removeItem("tutorDetails");

        navigate('../');
    }

  return (
    <div>
      <NavComponent/>
        <h1>Heyya we are up as Tutor!!</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
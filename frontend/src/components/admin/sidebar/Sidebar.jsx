import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const studentSubmit = () =>{
        navigate('../admin/student/')
    }
    const tutorSubmit = () =>{
        navigate('../admin/tutor/')
    }
    
    const coursesSubmit = () =>{
      navigate('../admin/courses/')
    }
   
  return (
    <div>
        <button onClick={studentSubmit}>Student</button>
        <button onClick={tutorSubmit}>Tutor</button>
        <button onClick={coursesSubmit}>Courses</button>
       
    </div>
  )
}

export default Sidebar
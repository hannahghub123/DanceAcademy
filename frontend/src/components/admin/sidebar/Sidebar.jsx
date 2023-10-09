import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const studentSubmit = () =>{
        navigate('../student/')
    }
    const tutorSubmit = () =>{
        navigate('../tutor/')
    }
    
    const coursecatSubmit = () =>{
      navigate('../course-category/')
    }
   
  return (
    <div>
        <button onClick={studentSubmit}>Student</button>
        <button onClick={tutorSubmit}>Tutor</button>
        <button onClick={coursecatSubmit}>Course category</button>
       
    </div>
  )
}

export default Sidebar
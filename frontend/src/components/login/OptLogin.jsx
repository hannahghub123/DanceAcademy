import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavComponent from '../navbar/NavComponent'

const OptLogin = () => {
    const navigate = useNavigate()
    const stdloginSubmit = ()=>{
      navigate('../std-login/')
    }
    const trloginSubmit = ()=>{
      navigate('../tutor-login/')
    }
    return (
      <div>
          <NavComponent/>
          <br />
          <button onClick={stdloginSubmit}>Login as student?</button>
          <button onClick={trloginSubmit}>Login as teacher?</button>
      </div>
    )
}

export default OptLogin
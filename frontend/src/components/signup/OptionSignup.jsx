import React from 'react'
import NavComponent from '../navbar/NavComponent'
import { useNavigate } from 'react-router-dom'

const OptionSignup = () => {
  const navigate = useNavigate()
  const stdsignupSubmit = ()=>{
    navigate('../std-signup/')
  }
  const trsignupSubmit = ()=>{
    navigate('../tutor-signup/')
  }
  return (
    <div>
        <NavComponent/>
        <br />
        <button onClick={stdsignupSubmit}>are you a student?</button>
        <button onClick={trsignupSubmit}>are you a teacher?</button>
    </div>
  )
}

export default OptionSignup
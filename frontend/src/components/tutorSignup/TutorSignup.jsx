import React from 'react';
import {changeEmail, changeName, changePassword, changePhone,changeRepassword, changeUsername, changeExpertise, changeQualification} from '../../features/tutorsignupSlice';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/tutoraxios'
import './TutorSignup.css';
import { useNavigate } from 'react-router-dom';
import NavComponent from '../navbar/NavComponent';

const TutorSignup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state)=>state.tutorsignup)
    const data={
            
        "username":user.value.username,
        "name":user.value.name,
        "expertise":user.value.expertise,
        "qualification":user.value.qualification,
        "email":user.value.email,
        "phone":user.value.phone,
        "password":user.value.password,

      }

    const handleSignUp = ()=>{
        axiosInstance.post("signup/",data).then((res)=>{
          console.log(res.data);
          navigate('../tutor-login/')
        })
    }

  return (
    <>
    
    <NavComponent/>
    
    <div className="trsignup-container">
    
         <h2>Sign Up</h2>
      <div>
        <input
          className="trsignup-input"
          type="text"
          placeholder="Username"
          value={user.value.username}
          onChange={(e) => dispatch(changeUsername(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="trsignup-input"
          type="text"
          placeholder="Name"
          value={user.value.name}
          onChange={(e) => dispatch(changeName(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="trsignup-input"
          type="number"
          placeholder="Expertise"
          value={user.value.expertise}
          onChange={(e) => dispatch(changeExpertise(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="trsignup-input"
          type="text"
          placeholder="Qualification"
          value={user.value.qualification}
          onChange={(e) => dispatch(changeQualification(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="trsignup-input"
          type="email"
          placeholder="Email"
          value={user.value.email}
          onChange={(e) => dispatch(changeEmail(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="trsignup-input"
          type="number"
          placeholder="Phone"
          value={user.value.phone}
          onChange={(e) => dispatch(changePhone(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="trsignup-input"
          type="password"
          placeholder="Password"
          value={user.value.password}
          onChange={(e) => dispatch( changePassword(e.target.value))}
        />
      </div>
      <div>
        <input
          className="trsignup-input"
          type="password"
          placeholder="RePassword"
          value={user.value.repassword}
          onChange={(e) => dispatch( changeRepassword(e.target.value))}
        />
      </div>
      
      <div>
        <button onClick={handleSignUp} className="trsignup-button">Tutor Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default TutorSignup
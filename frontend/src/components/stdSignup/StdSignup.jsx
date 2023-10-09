import React from 'react';
import {changeEmail, changeName, changePassword, changePhone,changeRepassword, changeUsername, changeScore} from '../../features/stdsignupSlice';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/stdaxios'
import './StdSignup.css';
import { useNavigate } from 'react-router-dom';
import NavComponent from '../navbar/NavComponent';

const StdSignup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state)=>state.stdsignup)
    const data={
            
        "username":user.value.username,
        "name":user.value.name,
        "score":user.value.score,
        "email":user.value.email,
        "phone":user.value.phone,
        "password":user.value.password,

      }

    const handleSignUp = ()=>{
        axiosInstance.post("stdsignup/",data).then((res)=>{
          console.log("ivde etheetund");
          console.log(res.data);
          navigate('../std-login/')
        })
    }

  return (
    <>
    
    <NavComponent/>
    
    <div className="stdsignup-container">
    
         <h2>Sign Up</h2>
      <div>
        <input
          className="stdsignup-input"
          type="text"
          placeholder="Username"
          value={user.value.username}
          onChange={(e) => dispatch(changeUsername(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="stdsignup-input"
          type="text"
          placeholder="Name"
          value={user.value.name}
          onChange={(e) => dispatch(changeName(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="stdsignup-input"
          type="number"
          placeholder="Score"
          value={user.value.score}
          onChange={(e) => dispatch(changeScore(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="stdsignup-input"
          type="email"
          placeholder="Email"
          value={user.value.email}
          onChange={(e) => dispatch(changeEmail(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="stdsignup-input"
          type="number"
          placeholder="Phone"
          value={user.value.phone}
          onChange={(e) => dispatch(changePhone(e.target.value)) }
        />
      </div>
      <div>
        <input
          className="stdsignup-input"
          type="password"
          placeholder="Password"
          value={user.value.password}
          onChange={(e) => dispatch( changePassword(e.target.value))}
        />
      </div>
      <div>
        <input
          className="stdsignup-input"
          type="password"
          placeholder="RePassword"
          value={user.value.repassword}
          onChange={(e) => dispatch( changeRepassword(e.target.value))}
        />
      </div>
      
      <div>
        <button onClick={handleSignUp} className="stdsignup-button">Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default StdSignup
import React, { useState } from 'react';
import {changePassword, changeUsername} from '../../features/stdloginSlice';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/stdaxios';
import './StdLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import Back from '../common/back/Back';
import { changeaccessS } from '../../features/logoutSlice';


const StdLogin = () => {

  const [click, setClick] = useState(false);

  const [isInputFocused, setInputFocus] = useState(false);
  const [isPasswordInputFocused, setPasswordInputFocus] = useState(false);


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state)=>state.stdlogin)
    const data={
            
        "username":user.value.username,
        "password":user.value.password,

      }

    const handleLogin = ()=>{
        axiosInstance.post("stdlogin/",data).then((res)=>{
          console.log("ivdem ethy njn");
          console.log(res.data);

            const tokenobjs = {

                refresh : res.data.refresh,
                access : res.data.access,
                message : res.data.message

            };

            console.log(tokenobjs);

            localStorage.setItem("accessToken-S",JSON.stringify(res.data.access));
            localStorage.setItem("stdDetails",JSON.stringify(res.data.data));
            dispatch(changeaccessS(res.data.access))

          if (res.data.message === "success"){
            navigate('../std-dashboard/')
          }else{
            alert(res.data.message)
          }
        })
    }

  return (
   <>
<Back title='Student Login'/>

    <div className="login-container">
    
    
        <input
  className={`login-input ${isInputFocused ? 'focused' : ''}`}
  type="text"
  placeholder="Student UserName !"
  onFocus={() => setInputFocus(true)}
  onBlur={() => setInputFocus(false)}
          onChange={(e) => dispatch(changeUsername(e.target.value)) }
        />
  

      
        <input
      className={`login-input ${isPasswordInputFocused ? 'focused' : ''}`}
      type="password"
      placeholder="Password !"
      onFocus={() => setPasswordInputFocus(true)}
      onBlur={() => setPasswordInputFocus(false)}
          onChange={(e) => dispatch(changePassword(e.target.value))}
        />
   

      
      <div>
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>

      <div className='std-link'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                      <li >
                        <Link to='../tutor-login'>Go For Tutor Login ?</Link>
                      </li>
          </ul>
          </div>
    </div>
    </>
  )
}


export default StdLogin
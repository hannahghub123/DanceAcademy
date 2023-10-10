import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/tutoraxios';
import './TutorLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import { changeEmail,changePassword } from '../../features/tutorloginSlice';
import Back from '../common/back/Back';


const TutorLogin = () => {

  const [click, setClick] = useState(false);

  const [isInputFocused, setInputFocus] = useState(false);
  const [isPasswordInputFocused, setPasswordInputFocus] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tutor = useSelector((state)=>state.tutorlogin)
    const data={
          
        "email":tutor.value.email,
        "password":tutor.value.password,

      }

    const handleLogin = (id)=>{
        axiosInstance.post("login/",data).then((res)=>{
          console.log(res.data);

            const tokenobjs = {

                refresh : res.data.refresh,
                access : res.data.access,
                message : res.data.message

            };

            console.log(tokenobjs,"Ivde varunund");

            localStorage.setItem("accessToken-T",JSON.stringify(res.data.access));
            localStorage.setItem("tutorDetails",JSON.stringify(res.data.data));

          if (res.data.message === "success"){
            console.log("tutor id ",res.data.id);
            id=res.data.id
            navigate(`../tutor-dashboard/${id}`)

          }else if(res.data.message === "not approved"){
            alert("Login not approved")
          }else{
            alert(res.data.message)
          }
          
        })
        
    }

  return (
   <>
<Back title='Tutor Login'/>

    <div className="login-container">
        

    <input
  className={`login-input ${isInputFocused ? 'focused' : ''}`}
  type="text"
  placeholder="Tutor Email !"
  onFocus={() => setInputFocus(true)}
  onBlur={() => setInputFocus(false)}
  onChange={(e) => dispatch(changeEmail(e.target.value))}
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
        <button onClick={()=>handleLogin(data.id)} className="login-button">Login</button>
      </div>
      <div className='std-link'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                      <li >
                        <Link to='../std-login'>Go For Student Login ?</Link>
                      </li>
          </ul>
          </div>
    </div>
    </>
  )
}


export default TutorLogin
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/tutoraxios';
import './TutorLogin.css';
import { useNavigate } from 'react-router-dom';
import NavComponent from '../navbar/NavComponent';
import { changeEmail,changePassword } from '../../features/tutorloginSlice';


const TutorLogin = () => {

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
<NavComponent/>

    <div className="login-container">
         <h2>Login</h2>
      <div>
        <input
          className="login-input"
          type="text"
          placeholder="Email"
          
          onChange={(e) => dispatch(changeEmail(e.target.value)) }
        />
      </div>

      <div>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          
          onChange={(e) => dispatch( changePassword(e.target.value))}
        />
      </div>

      
      <div>
        <button onClick={()=>handleLogin(data.id)} className="login-button">Login</button>
      </div>
    </div>
    </>
  )
}


export default TutorLogin
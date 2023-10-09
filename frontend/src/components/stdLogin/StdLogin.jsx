import React from 'react';
import {changePassword, changeUsername} from '../../features/stdloginSlice';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/stdaxios';
import './StdLogin.css';
import { useNavigate } from 'react-router-dom';
import NavComponent from '../navbar/NavComponent';


const StdLogin = () => {

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

          if (res.data.message === "success"){
            navigate('../std-dashboard/')
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
          placeholder="Username"
          
          onChange={(e) => dispatch(changeUsername(e.target.value)) }
        />
      </div>

      <div>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          
          onChange={(e) => dispatch(changePassword(e.target.value))}
        />
      </div>

      
      <div>
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
    </>
  )
}


export default StdLogin
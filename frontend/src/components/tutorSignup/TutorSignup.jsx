import React, { useEffect, useState } from 'react';
import {changeEmail, changeName, changePassword, changePhone,changeRepassword, changeUsername, changeExpertise, changeQualification} from '../../features/tutorsignupSlice';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/tutoraxios'
import { useNavigate } from 'react-router-dom';
import Back from '../common/back/Back';
import Autocomplete from '@mui/joy/Autocomplete';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import axios from 'axios';
import './TutorSignup.css';

const TutorSignup = () => {

  const [cdata,setCdata] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [fileInput, setFileInput] = useState(null);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state)=>state.tutorsignup)
    const data= {
            
        "username":user.value.username,
        "name":user.value.name,
        "expertise":user.value.expertise,
        "qualification":user.value.qualification,
        "email":user.value.email,
        "phone":user.value.phone,
        "password":user.value.password,
        "courses": selectedCourses,
        "resume": fileInput,
      }

    console.log(selectedCourses,"course here");

    const handleSignUp = ()=>{
        axiosInstance.post("signup/",data).then((res)=>{
          console.log(res.data,"signupppppp data",res.data.data.id);
          
          handleFileSubmit(res.data.data.id);
          if(res.data.message==="success"){
            navigate('../tutor-login/')
          }
         
        })


    }

   

    const handleFileSubmit=async(id)=>{
      // e.preventDefault();
      console.log(id,"id in video submit");
      const formData = new FormData();
      formData.append('resume',fileInput)
      formData.append('id',id)
      try {
          const response = await axios.post("http://localhost:8000/tutor/resume-upload/",formData,{
              headers:{
                  'Content-Type':'multipart/form-data',
              },
              params: {
                  resource_type: 'auto',
              },
          });
          console.log(response.data,"###########");
          console.log('resume uploaded:',  response.data.url);
          setFileInput(null);

      } catch (error) {
          console.error("Error Uploading Video :",error)
      }
  }


    

    useEffect(()=>{
      axiosInstance.get("courses/")
      .then((res)=>{
        console.log(res.data,"course-data?????????");
        setCdata(res.data)
      })
    },[])
    

    const fileUploadHandle = (e)=>{
      const file = e.target.files[0];
      if(file){

        console.log(file,"//////");
        // setFileInput(file.name);
        setFileInput(file);
      }
    }


  return (
    <>
    
    <Back title='Tutor SignUp'/>
    
    <div className="trsignup-container">
    

      <div>
        <input
          required
          autoFocus
          className="trsignup-input"
          type="text"
          placeholder="Username"
          value={user.value.username}
          onChange={(e) => dispatch(changeUsername(e.target.value)) }
        />
      {/* <span className="text-danger">{user.value.error.username}</span> */}

        <input
         required
         autoFocus
          className="trsignup-input"
          type="text"
          placeholder="Tutor Name"
          value={user.value.name}
          onChange={(e) => dispatch(changeName(e.target.value)) }
        />
      {/* <span className="text-danger">{user.value.error.name}</span> */}

        <input
        required
        autoFocus
          className="trsignup-input"
          type="number"
          placeholder="Expertise"
          value={user.value.expertise}
          onChange={(e) => dispatch(changeExpertise(e.target.value))}
        />
            {/* <span className="text-danger">{user.value.error.name}</span> */}


        <input
        required
        autoFocus
          className="trsignup-input"
          type="text"
          placeholder="Qualification"
          value={user.value.qualification}
          onChange={(e) => dispatch(changeQualification(e.target.value))}
        />



       <Autocomplete
          className="trsignup-input"
          placeholder="Choose Your Course of Interest"
          options={cdata.map(item => item.title)}
          multiple={true}
          sx={{ width: "100%" }}
          value={selectedCourses}
          onChange={(event, newValue) => setSelectedCourses(newValue)}
        />

        
      {/* </div>
      <div> */}
        <input
          className="trsignup-input"
          type="email"
          placeholder="Email"
          value={user.value.email}
          onChange={(e) => dispatch(changeEmail(e.target.value)) }
        />
      {/* </div>
      <div> */}
        <input
          className="trsignup-input"
          type="number"
          placeholder="Phone"
          value={user.value.phone}
          onChange={(e) => dispatch(changePhone(e.target.value)) }
        />
      {/* </div>
      <div> */}
        <input
          className="trsignup-input"
          type="password"
          placeholder="Password"
          value={user.value.password}
          onChange={(e) => dispatch( changePassword(e.target.value))}
        />
      {/* </div>
      <div> */}
        <input
          className="trsignup-input"
          type="password"
          placeholder="RePassword"
          value={user.value.repassword}
          onChange={(e) => dispatch( changeRepassword(e.target.value))}
        />

<Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
        {!fileInput ? "Upload Your Resume" : <span>{fileInput.name}</span>}
      <input type="file" className=' hideit' onChange={fileUploadHandle}/>

    </Button>


          {/* <div className='tutor-link'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                      <li >
                        <Link to='../std-signup'>Student SignUp ?</Link>
                      </li>
          </ul>
          </div> */}
      </div>

     
      
      <div>
        <button onClick={handleSignUp} className="trsignup-button">Tutor Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default TutorSignup
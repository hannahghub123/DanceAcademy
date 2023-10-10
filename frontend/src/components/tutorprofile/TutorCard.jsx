import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './TutorProfile.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {changeEmail, changeName, changePassword, changePhone, changeUsername, changeExpertise, changeQualification} from '../../features/tutorprofileEditSlice';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/tutoraxios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const TutorCard = () => {
    const {id} = useParams(); 

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.tprofedit);

    const [data,setData] = useState(
        {
          id:id,
          username: '',
          name: '',
          expertise: '',
          email: '',
          qualification: '',
          phone: '',
          password: '',
          image:''
        }
      )
    useEffect((data)=>{
        const tutorDetails = localStorage.getItem("tutorDetails");
        
        if (tutorDetails) {
          const parseData = JSON.parse(tutorDetails);
  
          setData({...data,id:parseData.id,username:parseData.username, name:parseData.name, email:parseData.email, phone:parseData.phone, expertise:parseData.expertise, qualification:parseData.qualification, password:parseData.password, image:parseData.image});
  
          console.log("Parsedata",parseData)
        }
  
      },[])

      const handleUsernameChange = (e) => {
        setData({ ...data, username: e.target.value });
        dispatch(changeUsername(e.target.value));
        console.log(data.username,"edited username",user.value.username);
      };
  
      const handleNameChange = (e) => {
        setData({ ...data, name: e.target.value });
        dispatch(changeName(e.target.value));
        console.log(data.name,"edited name");
      };
  
      const handleExpertiseChange = (e) => {
        setData({ ...data, expertise: e.target.value });
        dispatch(changeExpertise(e.target.value));
        console.log(data.expertise,"edited exp");
      };
  
      const handleEmailChange = (e) => {
        setData({ ...data, email: e.target.value });
        dispatch(changeEmail(e.target.value));
        console.log(data.email,"edited email");
      };
  
      const handleQualificationeChange = (e) => {
        setData({ ...data, qualification: e.target.value });
        dispatch(changeQualification(e.target.value));
        console.log(data.qualification,"edited qualification");
      };
      const handlePhoneChange = (e) => {
        setData({ ...data, phone: e.target.value });
        dispatch(changePhone(e.target.value));
        console.log(data.phone,"edited phone");
      };
      const handlePasswordChange = (e) => {
        setData({ ...data, password: e.target.value });
        dispatch(changePassword(e.target.value));
        console.log(data.password,"edited password");
      };
  
  

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const handleSubmit = ()=>{
        console.log("id ivde kittunund",id)

        console.log("pass chyunna data",data,"???????????????????????????");

        
        axiosInstance.post("tprofedit/",data).then((res)=>{
          console.log(res.data," hi res.data ahn ith",res.data.name);
          localStorage.setItem("tutorDetails",JSON.stringify(res.data))
          setData({...data,id:res.data.id,username:res.data.username, name:res.data.name, email:res.data.email, phone:res.data.phone, expertise:res.data.expertise, qualification:res.data.qualification, password:res.data.password, image:res.data.image});

          handleClose();
        })
    }

  return (
    <>
            <div className="items shadow ">
                <div className="image">
                    <img src={data.image} alt="" />
                    <div className="overlay">
                      <i className="fa fa-edit icon"  onClick={handleOpen}></i>                   
                    </div>
                </div>
                <div className="details">
                    <h2 key={data.id}> <b>{data.name}</b></h2>
                    <p className="details-text">
                        Username - {data.username} <br />
                        Qualification - {data.qualification} <br />
                        Expertise - {data.expertise} Years<br />
                        Email - {data.email} <br />
                        Phone - {data.phone} <br /> 
                    </p>             
                </div>
            </div>

        <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Profile
          </Typography>

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={data.username}
            onChange={handleUsernameChange}
          />
            <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={data.name}
            onChange={handleNameChange}
          />
            <TextField
            label="Expertise"
            variant="outlined"
            fullWidth
            value={data.expertise}
            onChange={handleExpertiseChange}
          />
            <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={data.email}
            onChange={handleEmailChange}
          />
            <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={data.phone}
            onChange={handlePhoneChange}
          />
            <TextField
            label="Qualification"
            variant="outlined"
            fullWidth
            value={data.qualification}
            onChange={handleQualificationeChange}
          />
            <TextField
            label="Password"
            variant="outlined"
            fullWidth
            value={data.password}
            onChange={handlePasswordChange}
          />
            {/* <TextField
            label="RePassword"
            variant="outlined"
            fullWidth
            // value={repassword}
            onChange={(e) => dispatch(changeRepassword(e.target.value))}
          /> */}
        
        
          <Button variant="contained" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default TutorCard
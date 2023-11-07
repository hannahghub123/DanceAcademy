import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {changeName,changeEmail,changePassword,changePhone,changeUsername} from '../../features/stdEditslice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import axiosInstance from '../../axios/stdaxios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  marginTop:5 ,
  p: 4,
};

const StdCard = () => {

  const {id} = useParams();

  const dispatch = useDispatch()
  const user = useSelector((state)=>state.stdedit)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image,setImage] = useState('');

  const [data,setData] = useState("")

  useEffect(()=>{
    const stdDetails = localStorage.getItem("stdDetails");
    console.log(stdDetails,"stdDetailsssssss");
    if (stdDetails) {
      const parseData = JSON.parse(stdDetails);
      console.log("Parsedata",parseData)

      setData(parseData); 

    }

  },[]);

  console.log("dtaaa",data);

  const imageHandle =(e)=>{
    setImage(e.target.files[0]);
  }



  const handleSubmit = ()=>{

    const datas={
      id:data.id,
        username:data.username,
        course:data.course.id,
         name:data.name, 
         email:data.email, 
         phone:data.phone, 
         score:data.score, 
         password:data.password, 
         image:data.image
    }

    console.log(datas,"ji");

    axiosInstance.post("std-edit/",datas).then((res)=>{
      console.log(res.data," hi res.data ahn ith");
      localStorage.setItem("stdDetails",JSON.stringify(res.data.data))
      console.log(res.data.data.image,"imggggg",image);        
      setData({...data,id:res.data.data.id,username:res.data.data.username,course: res.data.course ,name:res.data.data.name, email:res.data.data.email, phone:res.data.data.phone, password:res.data.data.password});

      if (image){
        const handleSubmitFile = async(e)=>{
          console.log("submitting...");
  
          const formData = new FormData();
          formData.append('image',image)
          formData.append('id',id)
          console.log(formData,"Formdataaa");
          try{
              await axios.post('http://localhost:8000/std/image-set/',formData,{
                  headers:{
                      'Content-Type':'multipart/form-data',
                  },
              })
              .then((res)=>{
                localStorage.setItem("stdDetails",JSON.stringify(res.data.data))
                console.log(res.data,"??????????");
                setData({...data,image:res.data.data.image})
              })
              setImage(null);
      
          }catch(error){
              console.error("Error Creating Post :",error)
          }
          }
      
      handleSubmitFile();

      }

      handleClose();
    
    })
    toast.success(" Profile-Edits Updated!", {
      position: toast.POSITION.TOP_RIGHT
    });
}

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

const handleEmailChange = (e) => {
  setData({ ...data, email: e.target.value });
  dispatch(changeEmail(e.target.value));
  console.log(data.email,"edited email");
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

  return (
    <>
      {/* <div className="items shadow"  >
                <div className="img" >
                    <img src={data.image} alt="" />
                    <div className="overlay">
                    <i className="fa fa-edit icon" onClick={handleOpen}   title='Edit Details'></i>
                    </div>
                </div>
                <div className="details">
                    <h2>{data.name}</h2>
                    <h2  className="all-caps"><b>{data.course.title}</b></h2> 
        
                    <p className="details-text">
                
                        Username - {data.username} <br /> */}
                        {/* Qualification - {data.qualification} <br /> */}
                        {/* Score - {data.score}<br />
                        Email - {data.email} <br />
                        Phone - {data.phone} <br /> 
                        Password - {data.password} <br />
                    </p> 
                </div>
            </div> */}

 

<div className="profile-card shadow">
                        <Stack >
                          <Card variant="outlined" sx={{ width: 500 }}>
                            <CardContent orientation="horizontal">
                              <ImageListItem sx={{ width: 200 }}>
                              <img
                                  srcSet={data.image}
                                  src={data.image}
                                  loading="lazy"
                                />
                              </ImageListItem>


                              <div className="details">
                                <Typography  >
                                {data.name}
                                
                                </Typography>
                                <Typography sx={{textTransform:"uppercase"}}>
                                {/* {(data.course).map((item)=>item.title)} */}
                                </Typography>
                                <Typography >
                        
                                  Username - {data.username}
                                </Typography>
                                <Typography >
                                  
                                  Email - {data.email}
                                </Typography>
                                <Typography>
                                  Phone - {data.phone}
                                </Typography>
                                <br />
                                <i className="fa fa-edit icon" onClick={handleOpen}   title='Edit Details'></i>
                              
                              </div>
                              
                            </CardContent>
                           

                            
                          </Card>
                        </Stack>
                      </div>







<Modal open={open} onClose={handleClose} className='edit-modal'>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Profile
          </Typography>
          <br />

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

            {/* <TextField
            label="Course"
            variant="outlined"
            fullWidth
            value={(data.course).map((item)=>item.title)}
            InputProps={{
                readOnly: true,
              }}
          /> */}
            <TextField
            label="Score"
            variant="outlined"
            fullWidth
            value={data.score}
            InputProps={{
              readOnly: true,
            }}
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
            label="Password"
            variant="outlined"
            fullWidth
            value={data.password}
            onChange={handlePasswordChange}
          />
          <br /><br />

          <input type="file" onChange={imageHandle}/>

          <button className='edit-btn'  onClick={handleSubmit} >
            Save Changes
          </button>
        </Box>
      </Modal>
  

    </>
  )
}

export default StdCard
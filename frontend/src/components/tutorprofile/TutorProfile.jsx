import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {changeEmail, changeName, changePassword, changePhone, changeUsername, changeExpertise, changeQualification} from '../../features/tutorprofileEditSlice';
import { useDispatch, useSelector } from 'react-redux';
import NavComponent from '../navbar/NavComponent';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axiosInstance from '../../axios/tutoraxios';
// import profileimg from '../../assets/images/profile-1.jpeg';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import {storage} from '../../components/firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

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


const TutorProfile = () => {


    const {id} = useParams(); 
    console.log("hannah id - ",id);

    const user = useSelector((state)=>state.tprofedit);
    const dispatch = useDispatch();

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


      const handleSubmit = ()=>{
        console.log("id ivde kittunund",id)

        console.log("pass chyunna data",data,"???????????????????????????");

        
        axiosInstance.post("tprofedit/",data).then((res)=>{
          console.log(res.data,"res.data ahn ith");
          handleClose();
        })
    }

    
    const navigate = useNavigate()

    const homeSubmit= () =>{
        navigate(`../tutor-dashboard/${id}`)
    }

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

    const [image,setImage] = useState('')
    const imageHandle =(e)=>{
      setImage(e.target.files[0]);
    }
    const imageSubmitHandler = ()=>{
        const reference = ref(storage,`tutor-image/${image.name + v4()}`)
        uploadBytes(reference,image).then((res)=>{
          getDownloadURL(reference).then((url)=>{
            console.log(url,"####",id)
            const datas={
              id:id,
              image:url
            }

            axiosInstance.post('image-set/',datas)
            .then((res)=>{
              console.log("hi ivde enthokeyo varunund enn thonunnu",res.data.data);
              // const parsed=JSON.parse(res.data.data)
              //console.log(parsed,"###################################");
              localStorage.setItem("tutorDetails",JSON.stringify(res.data.data))
              setData({...data,image:res.data.data.image}) 
            }) 

          })
       
        }).catch((error)=>{
          console.log("ERRORR");
        })

    }

  return (   
    
    

    <>
        <NavComponent/>
        {/* <div className='profile-component' style={{ marginTop:5, marginLeft:50 }}> */}
        <div style={{ marginTop:5 ,display: 'flex', alignItems: 'center', justifyContent:'center' }}>
        

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={data.image}
        title="profile image"
      />
     
       
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.name}

      
        </Typography>
        <div style={{ marginLeft: '20px' }}>
    <Typography variant="body2" color="text.secondary">
      Username - {data.username} <br />
      Qualification - {data.qualification} <br />
      Expertise - {data.expertise} <br />
      Email - {data.email} <br />
      Phone - {data.phone} <br /> <br />
    </Typography>
  </div>
      </CardContent>
      {/* <CardActions>  </CardActions> */}
 

    <Button onClick={handleOpen}>EDIT PROFILE</Button>
  <Fab style={{ width: '38px', height: '35px', marginLeft:50, background:'white'}}>
          <EditIcon style={{fontSize:'15px'}}/>
        </Fab>


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
      </Card>

      <br />

      
      </div>
      
      <button onClick={homeSubmit}  >Go to Dashboard</button>
    
      <br />
      <br />
      <input type="file" onChange={imageHandle}/>
      <button onClick={imageSubmitHandler}  >Upload Image</button>
      <br />
      {/* <div>
      <video controls>
        <source src="https://firebasestorage.googleapis.com/v0/b/danceacademy-b92b7.appspot.com/o/tutor-image%2FWhatsApp%20Video%202023-10-06%20at%2011.21.07_a91bb87b.mp4b99ca641-151a-411d-8888-aa96f3fb87d6?alt=media&token=9101b164-7b2b-48a6-8f17-55baff6b7e65&_gl=1*nduv08*_ga*MzA0OTkxMzguMTY5MTQ3NDkxMw..*_ga_CW55HF8NVT*MTY5NjU3MTU5NS4xOS4xLjE2OTY1NzE4OTMuNDEuMC4w" type="video/mp4"/>
   
        Your browser does not support the video tag.
      </video> 

      </div> */}
 
    </>

    
  )
}




export default TutorProfile
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TutorProfile.css'
import Back from '../common/back/Back';
import TutorCard from './TutorCard';
import UploadWidget from '../cloudinary/UploadWidget';


const TutorProfile = () => {


    const {id} = useParams();
 
    console.log("hannah id - ",id);

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

        console.log("Parsedataa",parseData)
      }

    },[])

   

  return (   
    
    

    <>
        <Back title='Your Profile'/>
        <div style={{ marginTop:5 ,display: 'flex', alignItems: 'center', justifyContent:'center' }}>
        
        <section className='team padding'>
            <div className="container grid">
                <TutorCard/>
            </div>
        </section>
        <UploadWidget/>
        </div>
      
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
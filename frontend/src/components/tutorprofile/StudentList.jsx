import React, { useEffect, useState } from 'react';
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import axiosInstance from '../../axios/stdaxios';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import SessionAssign from './SessionAssign';


const StudentList = () => {
    const [val,setVal]= useState([]);
    const {id} = useParams();
    const [timing,setTiming] = useState(false)
    const [ timingId,setTimingId] = useState(null)
    const [time,setTime] = useState(null)

    useEffect(()=>{
        const values={
            id:id,
        }
        axiosInstance.post("pay-details/",values)
        .then((res)=>{
            console.log(res.data);
            setVal(res.data.paydata)
        })
    },[])

    console.log(val,"val");

    const courses = val.map(item => item.structId.course);

    console.log(courses,"courses");

    const timingHandle=(id)=>{
      setTimingId(id)
      setTiming(!timing)
    }


  return (
    <>

        <div className="flex justify-center mb-4">
          <Stack spacing={2} useFlexGap>
              <h1>Assigned Student-Course Details :</h1>
            {val.map((item)=>(
            
            <Card variant="outlined" sx={{ width: 420 }}>
              <CardContent orientation="horizontal">

              <ImageListItem sx={{ width: 100 }}>
                  <img
                    srcSet={item.studentId.image}
                    src={item.studentId.image}
                    loading="lazy"
                  />
                </ImageListItem>

                <div>
                  <Typography sx={{ overflow: "hidden" }}>
                    Assigned Course : <span style={{ textTransform:"uppercase"}}> {item.structId.course.title} </span>
                  </Typography>
                  <Typography sx={{ overflow: "hidden" }}>
                    Course-Plan : {item.structId.title}
                    <hr />
                  </Typography>
                  <Typography sx={{ overflow: "hidden" }}>
                    Student Name : {item.studentId.name}
                  </Typography>

                  <Typography sx={{ overflow: "hidden" }}>
                    
                  </Typography>
                  
                <button onClick={()=>timingHandle(item.id)}>Add Session Timing</button>

                </div>
              </CardContent>
              
              
              {(timing && timingId && (timingId===item.id))?  
                  <SessionAssign student={item.studentId.id} courseplan={item.structId.id}/>
                  :null   
                }
              
            </Card>

            ))}
          </Stack>
        </div>
    </>
  )
}

export default StudentList
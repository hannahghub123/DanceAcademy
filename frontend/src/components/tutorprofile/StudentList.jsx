import React, { useEffect, useState } from 'react';
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import axiosInstance from '../../axios/stdaxios';
import { useParams } from 'react-router-dom';


const StudentList = () => {
    const [val,setVal]= useState([]);
    const {id} = useParams()


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
                                <Typography sx={{ overflow: "hidden" }}>
                                  
                                </Typography>
                                
                              
                              </div>
                            </CardContent>
                            

                           
                          </Card>
                          ))}
                        </Stack>
                      </div>

    </>
  )
}

export default StudentList
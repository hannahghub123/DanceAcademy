import React, { useEffect, useState } from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import axiosInstance from "../../axios/stdaxios";
import { useParams } from 'react-router-dom';
import './StdProfile.css'

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(2.5),
    textAlign: 'center',
    borderRadius: 5,
    color: theme.vars.palette.text.secondary,
  }));


const TasksAssigned = () => {

    const {id} = useParams()

    const [taskDetails,setTaskDetails] = useState([])

    useEffect(()=>{
        const values={
            id:id
        }
        axiosInstance.post("task-details/",values)
        .then((res)=>{
            console.log(res.data);
            setTaskDetails(res.data.data);
        })
    },[])

  return (
    <>
     <div className='task-container'>
        <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%'}}
        >
    {taskDetails.map((item) => (
      <Grid key={item.id} item xs={12}>
        <Item>
          <div className='d-flex flex-column '>
          <div className='tasknotes-text' >
                <b>Course :   </b>
                <b style={{textTransform:"uppercase"}}>{item.session_assign.course_struct.course.title}</b>
            </div>
            <div className='tasknotes-text'>
                <b>Course-structure :   </b>
                {item.session_assign.course_struct.title}
            </div>
            <div className='tasknotes-text'>
                <b>From :   </b>
                {item.session_assign.tutor.name}
            </div>
            <br />
            <div className='tasknotes-text'>
                <b>Task :   </b>
                {item.task}
            </div>
            
            {/* <div className='tasknotes-text'>
              <span className='ml-4 '><i className="fas fa-edit icon"></i></span>

              <span className='ml-1 '><i className="fas fa-trash icon"></i></span>
            </div> */}
          </div>
        </Item>
      </Grid>
    ))}

    </Grid>
    </div>
    </>
  )
}

export default TasksAssigned
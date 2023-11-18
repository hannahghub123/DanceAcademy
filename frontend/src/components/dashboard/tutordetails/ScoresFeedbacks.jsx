import React, { useEffect, useState } from 'react'
import Back from '../../common/back/Back';
import axiosInstance from '../../../axios/stdaxios';
// import axios from '../../../axios/tutoraxios'
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(2.5),
    textAlign: 'center',
    borderRadius: 5,
    color: theme.vars.palette.text.secondary,
  }));

const ScoresFeedbacks = () => {

    const [stdDetails,setStdDetails] = useState([]);
    const [feedbackDetails,setFeedbackDetails] = useState([]);

    useEffect(()=>{
        
        axiosInstance.get("std-details/")
        .then((res)=>{
          console.log(res.data);
          setStdDetails(res.data)
        })

        // axios.post("feedback-details/")
        // .then((res)=>{
        //   console.log(res.data);
        //   setFeedbackDetails(res.data)
        // })

    },[])

    console.log(feedbackDetails,"::::::::::::");

  return (
    <div>
        <Back title='Scores & Feedbacks' />
        <br />

        <div className='container'>
        <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}
    >
    {stdDetails.map((item) => (
      <Grid xs={6}>
        <Item>
          <div className='d-flex flex-row justify-content-between '>
            <div className='notes-text'>{item.name}</div>
            <b>SCORE : {item.score} </b>

            
                {/* <div className='container'>
                    <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: '100%' }}
                >
                {feedbackDetails
                .filter(val => val.student.name === item.name) 
                .map((value) => (
                <Grid xs={6}>
                    <Item>
                    <div className='d-flex flex-row justify-content-between '>
                        <div className='notes-text'>{value.feedback}</div>
                    </div>
                    </Item>
                </Grid>
                ))}

                </Grid>
                </div> */}
           
            <div className='icon-container'>
              <span className='ml-4 '><i className="fas fa-edit icon"></i></span>

              <span className='ml-1 '><i className="fas fa-trash icon"></i></span>
            </div>
          </div>
        </Item>
      </Grid>
    ))}

    </Grid>
    </div>
    </div>
  )
}

export default ScoresFeedbacks
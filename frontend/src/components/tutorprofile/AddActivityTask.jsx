import axiosInstance from '../../axios/stdaxios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddActivityTask = (props) => {

    const studentId=props.studentId
    const coursePlan = props.coursePlan
    const tutorId = props.tutorId

    console.log(studentId,coursePlan,"????????",tutorId);
    const [ addTask,setAddTask] = useState("")

    const activityTaskHandle=(e)=>{
        e.preventDefault();
        const values={
            studentId:studentId,
            coursePlan:coursePlan,
            tutorId: tutorId,
            task:addTask
        }
        console.log(values,"task values??????");
        axiosInstance.post("add-activityTask/",values)
        .then((res)=>{
            console.log(res.data,"456284521");
        })
    }

  return (
    <>
    <div className="trsignup-container">
         <form onSubmit={activityTaskHandle}>
          <input
            required
            label="Add notes"
            variant="outlined"
            fullWidth
            className='trsignup-input'
            placeholder='Add Activity Task -'
            onChange={(e)=>setAddTask(e.target.value)}
          />

          <br />

          <button className='edit-btn mt-2'>
           Add
          </button>

          </form>
    </div>
    </>
  )
}

export default AddActivityTask
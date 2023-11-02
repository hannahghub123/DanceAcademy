import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axiosInstance from '../../axios/stdaxios';
import { useParams } from 'react-router-dom';

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


const AddNotesModal = (props) => {

    const {id} = useParams()

    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    const [addnotes,setAddNotes] = React.useState("");

    console.log(addnotes,"addnotes");

    const handleSubmit = ()=>{
        const values={
            notes:addnotes,
            id:id
        }

        axiosInstance.post("add-notes/",values)
        .then((res)=>{
            console.log(res.data);
            props.setRender((prev)=> !prev)
        })
        handleClose();
    }

  return (
    <>
       <Modal open={open} onClose={handleClose} className='edit-modal'>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Profile
          </Typography>
          <br />

          <TextField
            label="Add notes"
            variant="outlined"
            fullWidth
            onChange={(e)=>setAddNotes(e.target.value)}
          />

          <br /><br />

          <button className='edit-btn'  onClick={handleSubmit} >
           Add
          </button>
        </Box>
      </Modal>
    </>
  )
}

export default AddNotesModal
import React, { useEffect, useState } from 'react'
import Back from '../common/back/Back';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import './style.css';
import axiosInstance from '../../axios/stdaxios';
import { useParams } from 'react-router-dom';
import AddNotesModal from './AddNotesModal';
import EditNotesModal from './EditNotesModal';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(2.5),
    textAlign: 'center',
    borderRadius: 5,
    color: theme.vars.palette.text.secondary,
  }));



const StudentMyNotes = () => {

    const {id} = useParams();
    const [notes,setNotes] = useState([]);
    const [addnotes,setAddNotes] = useState(false);
    const [render,setRender] = useState(false);
    const [editnotes,setEditNotes] = useState(false);
    const [notesId,setNotesId] = useState(null)

    useEffect(()=>{
        const values={
            id:id
        }
        axiosInstance.post("notes-data/",values)
        .then((res)=>{
            console.log(res.data);
            setNotes(res.data)
        })
    },[render])

    const notesAddHandle=()=>{
        setAddNotes(!addnotes);
    }

    const notesEditHandle=(id)=>{
      setEditNotes(!editnotes);
      setNotesId(id)
    }

    const notesDeleteHandle=(id)=>{
      alert("Are your sure you want to delete this notes?")
      const values = {
        id:id,
      }
      axiosInstance.post("delete-notes/",values)
      .then((res)=>{
        console.log(res.data);
        setRender(!render)

        // need to show the notes deleted toast !
      })
    }

  return (
    <>
    <Back title="Your MyNotes (std)"/>
        <div className='notes'>
        <h1>Add Notes</h1>
        <span onClick={notesAddHandle}><i class="fa fa-plus icon" aria-hidden="true"></i></span>
        </div>
        <div className='container'>
        <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}
    >
    {notes.map((item) => (
      <Grid xs={6}>
        <Item>
          <div className='d-flex flex-row justify-content-between '>
            <div className='notes-text'>{item.notes}</div>
           
            <div className='icon-container'>
              <span className='ml-4 ' onClick={()=>notesEditHandle(item.id)}><i className="fas fa-edit icon"></i></span>

              <span className='ml-1 ' onClick={()=>notesDeleteHandle(item.id)}><i className="fas fa-trash icon"></i></span>
            </div>
          </div>
        </Item>
      </Grid>
    ))}

    </Grid>
    </div>

    {addnotes? <AddNotesModal setRender={setRender}/> : null}
    {editnotes? <EditNotesModal id={notesId} setRender={setRender}/> : null}
 
    </>
  )
}

export default StudentMyNotes
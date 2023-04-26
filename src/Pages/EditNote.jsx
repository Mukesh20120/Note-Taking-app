import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom'
import {AiFillDelete} from 'react-icons/ai'
import CreateDate from './CreateDate';

function EditNote({notes, setNotes}) {
  const {id} = useParams();
  const note = notes.find((item)=>item.id==id);
  const [title,setTitle] = useState(note.title);
  const [details,setDetails] = useState(note.details);
  const navigate = useNavigate();
  const handle = (e)=>{
    e.preventDefault();
    if(title && details){
    const time = CreateDate();
    
    const new_notes = notes.map((item)=>{
      if(item.id==id){
        item.title = title;
        item.details = details;
        item.date = time;
      }
    return item;
    })
    setNotes(new_notes);
   }


   navigate('/');
  }

  const handleDelete = () =>{
    if(window.confirm("Are you sure want to delete this note? ")){
      const new_notes = notes.filter(item=>item.id!=id);
      setNotes(new_notes);
      navigate('/');
    }
  }

  return (
    <section>
        <header className='create-note__header'>
            <Link to='/' className='btn'><IoIosArrowBack/></Link>
            <button className="btn lg primary" onClick={handle}>Save</button>
            <button className="btn danger" onClick={handleDelete}><AiFillDelete/></button>
        </header>
        <form className='create-note__form' onSubmit={handle} >
            <input type="text" placeholder='Title...' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea rows="28" placeholder='Note detail...' value={details} onChange={(e)=>{setDetails(e.target.value)}}></textarea>
        </form>
    </section>
  )
}

export default EditNote
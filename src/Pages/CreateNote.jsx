import {IoIosArrowBack} from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CreateDate from './CreateDate'
import {v4 as uuid} from 'uuid'

function CreateNote({setNotes}) {
    const [title, setTitle] = useState('');
    const [details,setDetails] = useState('');
    const date = CreateDate();
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
          e.preventDefault();
          if(title && details){
           const note = { id: uuid(), title, details, date};
           setNotes(prev => [note, ...prev]);
          }
       navigate('/');
    }

  return (
    <section>
        <header className='create-note__header'>
            <Link to='/' className='btn'><IoIosArrowBack/></Link>
            <button className="btn lg primary" onClick={handleSubmit}>Save</button>
        </header>
        <form className='create-note__form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Title...' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <textarea rows="28" placeholder='Note detail...' value={details} onChange={(e)=>{setDetails(e.target.value)}}></textarea>
        </form>
    </section>
  )
}

export default CreateNote
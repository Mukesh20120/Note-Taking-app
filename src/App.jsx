import React, { useEffect } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Note from "./Pages/Note";
import CreateNote from "./Pages/CreateNote";
import EditNote from "./Pages/EditNote";
// import data from './Pages/dummytext'
import { useState } from "react";

function App(){
    const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
    useEffect(()=>{
      localStorage.setItem('notes', JSON.stringify(notes));
    },[notes])

    return (
        <main id="app">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Note notes={notes}/>}/>
            <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>}/>
            <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>}/>
          </Routes>
       </BrowserRouter>
        </main>
    )
}

export default App;

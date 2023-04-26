import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

import NoteItem from "./NoteItem.jsx";

function Note({ notes }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredNotes, setFilterNotes] = useState(notes);
  const handleTextChange = () =>{
    setFilterNotes(notes.filter(note=>{
      if(note.title.toLowerCase().match(searchText.toLocaleLowerCase()))
         return note;
    }))
  }
  useEffect(handleTextChange,[searchText]);
  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Note</h2>}
        {showSearch && <input type="text" autoFocus placeholder="keyword..." value={searchText} onChange={(e)=>{setSearchText(e.target.value);
        handleTextChange();}}/>}
        <button className="btn" onClick={() => {setShowSearch((prev) => !prev);
       setSearchText('');}}>
          {showSearch ? <ImCross /> : <BsSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.map((d) => (
          <NoteItem key={d.id} note={d} />
        ))}
      </div>
      <Link to={"/create-note"} className="btn add__btn">
        <BiPlus />
      </Link>
    </section>
  );
}

export default Note;

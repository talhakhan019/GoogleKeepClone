import React from 'react';
import { useState } from 'react';
const CreateNote = (props) => {
  const [note,setNote] = useState({
    title: "",
    content: ""
  });
  const inputEvent = (event) => {
    const {name,value} = event.target;
    setNote((prevdata) => {
      return {
        ...prevdata,
        [name]:value
      }
    })
  }
  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: ""
    })
  }
  return (
    <>
        <br />
        <div className='main_note'>
            <form>
                <input name='title' type="text" placeholder="Title" autoComplete='off' value={note.title} onChange={inputEvent}/>
                <textarea name='content' placeholder='Write a note...' value={note.content} onChange={inputEvent}></textarea>
                <button className='plus_sign' onClick={addEvent}>+</button>
            </form>
        </div>
        <br />
    </>
  )
}

export default CreateNote
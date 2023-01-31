import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData)=>{
      return [
        ...prevData,
        note
      ]
    })
  }
  const onDelete = (id) => {
    setAddItem((oldData) => 
      oldData.filter((curData,index) => {
        return index !== id;
      })
    )
  }
  return (
    <>
      <Header/>
      <div className='notes_div'>
        <CreateNote passNote = {addNote}/>
        <div className='notes'>
          {
            addItem.map((val,index) => {
              return <Note key={index} id={index} title={val.title} content={val.content} deleteItem = {onDelete}/>
            })
          }
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default App;
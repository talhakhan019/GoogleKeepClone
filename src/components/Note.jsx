import React from 'react'

const Note = (props) => {
  return (
    <>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <i className='fa fa-trash delete_icon' onClick={()=>{
              props.deleteItem(props.id)
            }}/>
        </div>
    </>
  )
}

export default Note
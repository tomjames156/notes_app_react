import React from 'react'
import add from '../assets/add.svg'
import { Link } from 'react-router-dom'

const AddNoteBtn = () => {

  return (
    <Link to={`/note/new/`} className='add-btn'>
        <img src={add} alt="Plus/ Add icon"/>
    </Link>
  )
}

export default AddNoteBtn
import React from 'react'
import { useState, useEffect } from 'react'
import NotesList from '../components/NotesList'
import Spinner from '../components/Spinner'
import AddNoteBtn from '../components/AddNoteBtn'

const NotesListPage = () => {
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let url = process.env.REACT_APP_API_LINK

    useEffect(() => {
        getNotes();
        setIsLoading(false);
    }, [])

    const getNotes = async () => {
        let response = await fetch(`${url}/api/notes/`)
        let data = await response.json()
        setNotes(data)
    }

    return (
        notes ?
        isLoading ? <Spinner/> : <>
        <div className='name-number' >
            <h2>&#9782; Notes List</h2> 
            <h3>{notes.length} {notes.length !== 1 ? "notes" : "note"}</h3>
        </div>
        <NotesList notes={notes}/>
        <AddNoteBtn/>
        </> : "No notes available 🥲"
    )
}

export default NotesListPage
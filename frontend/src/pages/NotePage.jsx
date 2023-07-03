import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
    const [note, setNote] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    let noteID = params.id

    useEffect(() => {
        getNote();
        setIsLoading(false);
    }, [noteID])

    const getNote = async () => {
        if (noteID !== 'new'){
            let response = await fetch(`/api/notes/${noteID}/`)
            let data = await response.json()
            setNote(data)
        }
    }

    let styling = {
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        background: '#333',
        color: 'white',
        width: '100%',
        height: '20rem',
        border: 'none',
        outline: 'none',
        resize: 'none',
        fontSize: '1rem',
    }

    const handleChange = (e) =>{
        setNote({...note, body: e.target.value})
    } 

    const updateNote = async () => {
        fetch(`/api/notes/${noteID}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const createNote = async () => {
        fetch('/api/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let update = () => {
        if (noteID !== 'new' && note.body === ''){
            deleteNote()
        }else if(noteID !== 'new'){
            updateNote()
        }else if(noteID === 'new' && note.body !== ''){
            createNote()
        }
        window.location = '/';
    }

    const deleteNote = async () => {
        fetch(`/api/notes/${noteID}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location = '/'
    }

  return (
    isLoading ? <Spinner/> : 
    <>
        <div className="back-delete">
            <div className="back-btn">
            <ArrowLeft title="Back" style={{cursor: 'pointer'}} onClick={update}/>
            </div>
            {noteID !== 'new' ? <button title='Delete Note' onClick={deleteNote}>Delete</button> : <button title='Save Note' onClick={update}>Done</button>}
        </div>
        <textarea autoFocus onChange={handleChange} value={note.body} style={styling}></textarea>
    </> 
  )
}

export default NotePage
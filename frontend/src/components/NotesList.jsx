import React from 'react'
import NoteItem from './NoteItem'

function NotesList({notes}) {
    const styling = {
        marginTop: '1rem',
        display: 'block',
    }
  return (
    <ul className='notes_list' style={styling}>
            {
                notes.map((note) => {
                    return (
                        <NoteItem key={note.id} note={note}/>
                    )
                })
            }
    </ul>
  )
}

export default NotesList
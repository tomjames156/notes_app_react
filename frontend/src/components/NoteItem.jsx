import React from 'react'
import {Link} from 'react-router-dom'

const NoteItem = ({note}) => {
    const styling = {
        borderRadius: '0.25rem',
        padding: '0.75rem 1rem',
        listStyleType: 'none',
    }

    let getDate = (raw_date) => {
      return new Date(raw_date).toLocaleDateString()
    }

    let getTitle = (note_text, length) => {
      return trimText(note_text.split('\n')[0], length)
    }

    let trimText = (note_text, length, extra='...') => {
      if(note_text.length > length){
        return note_text.substring(0, length) + extra
      }else{
        return note_text
      }

    }

    let getContent = (note_text) => {
      let title = getTitle(note_text, 44)
      let auto_title = note_text.substring(0, 44) + '...'

      if(title !== auto_title && title !== note_text){
        let string = note_text.replace(title, '')
        string.replaceAll('\n', ' ')
        return string
      }
      return ''
    }

  return (
    <Link to={`note/${note.id}`} className='note-link'>
    <li className='note-item' style={styling}>{getTitle(note.body, 44)}
    <div><p>{getDate(note.last_updated)}</p><p>{trimText(getContent(note.body), 35, '')}</p></div></li>
    </Link>
  )
}

export default NoteItem
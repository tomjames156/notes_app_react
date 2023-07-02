import React from 'react'
import spinner from '../assets/spinner.svg'

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <img src={spinner} alt="Loading icon" />
    </div>
  )
}

export default Spinner
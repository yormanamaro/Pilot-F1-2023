import React from 'react'
import s from './style.module.css'

const DisplayPilots = (props) => {
  return (
    <div className={s.container}>
      {props.pilot
        ? `Champions 2023: ${props.pilot}`
        : 'No driver selected'}
    </div>
  )
}

export default DisplayPilots
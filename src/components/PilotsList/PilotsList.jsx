import React from 'react'
import PilotsListItem from '../PilotsListItem/PilotsListItem'
import { PILOTS_2023 } from './datapilot'
import s from './style.module.css'


const PilotsList = (props) => {
  return (
    <div className={s.container}>
      {PILOTS_2023.map((pilot) => (
        <PilotsListItem
          isSelected={props.pilot === pilot} 
          pilot={pilot}
          onClick={props.onPilotClick}
          key={pilot}
        />
      ))}
    </div>
  )
};

export default PilotsList
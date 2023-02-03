import React from 'react'
import { useState } from 'react'
import s from './style.module.css'


const PilotsListItem = (props) => {

  const [isHovered, serIsHover] = useState(false);

  const activate = () => {
    serIsHover(true);
  };

  const desactivate = () => {
    serIsHover(false);
  };

  const getBackgraundColor = () => {
    if (isHovered) {
      return '#a5e9ff';
    } else {
      if (props.isSelected) {
        return '#26baea';
      } else {
        return '#eff0ef'
      } 
    }
  };

  const onItemClick = () => {
    props.onClick(props.pilot);
  };



  return (
    <div className={s.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={desactivate}
      style={{ backgroundColor: getBackgraundColor() }}
    >
      {props.pilot}
    </div>
  )
};

export default PilotsListItem

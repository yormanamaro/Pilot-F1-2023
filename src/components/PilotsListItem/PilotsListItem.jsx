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
      return '#f9f9f9';
    } else {
      if (props.isSelected) {
        return '#e8743a';
      } else {
        return '#ededed';
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

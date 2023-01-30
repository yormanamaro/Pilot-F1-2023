import React from 'react'
import stylePilots from './style.module.css'



const Pilots = (props) => { // Saber que require es una de las formas de insertar una img 
    return (
      <div className={stylePilots.containerPilots}>
        <img 
          className={stylePilots.imgPilots} 
          src={require(`../images/piloto-${props.imgPilot}.png`)} 
          alt="Photography by Fernando Alonso" /> 
          <div className={stylePilots.container_information}>
            <p className={stylePilots.pilot_name}><strong>{props.name}</strong> from {props.country}</p>
            <p className={stylePilots.team_pilot}>Driver of the <strong>{props.team}</strong></p>
            <p className={stylePilots.pilot_story}>"{props.review}"</p>
          </div>
      </div>

    );
};

export default Pilots












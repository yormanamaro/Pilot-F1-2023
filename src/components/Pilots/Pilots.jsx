import React from 'react'
import stylePilots from './style.module.css'



const Pilots = () => { // Saber que require es una de las formas de insertar una img 
    return (
      <div className={stylePilots.containerPilots}>
        <img 
          className='stylePilots.imgPilots' 
          src={require('../images/piloto-fernandoAlonso.png')} 
          alt="Photography by Fernando Alonso" /> 
          <div className='stylePilots.container_information'>
            <p className='stylePilots.pilot_name'>Fernando Alonso from Spain</p>
            <p className='stylePilots.team_pilot'>Driver of the Aston Martin Aramco Cognizant Formula One Team</p>
            <p className='stylePilots.pilot_story'>"Fiercely competitive, Alonso is not shy about his talent, rating himself as 9/10 “in everything”, and few in the know would disagree, with his performances in F1 characterised by blistering speed, brilliant tactical thinking, exemplary race craft, a razor-sharp eye for detail and a relentless determination to win."</p>
          </div>
      </div>

    );
};

export default Pilots










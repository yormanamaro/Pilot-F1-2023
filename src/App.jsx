import React from 'react'
import { useState } from 'react';
import Pilots from './components/Pilots/Pilots';
import DisplayPilots from './components/DisplayPilots/DisplayPilots';
import PilotsList from './components/PilotsList/PilotsList';
import './global.css';

function App() {

  const [currentPilots, setCurrentPilots] = useState(''); 

  const onClickListpilots = (pilot) => {
    setCurrentPilots(pilot);
    alert('Great see you at the end of the year');
  }

  return (
    <div className='App'>
      <h1 className='title'>My list of favorite formula one drivers</h1>

      <Pilots
        imgPilot='fernandoAlonso' 
        name='Fernando Alonso'
        country='Spain'
        team='Aston Martin Aramco Cognizant'
        review='Fiercely competitive, Alonso is not shy about his talent, rating himself as 9/10 “in everything”, and few in the know would disagree, with his performances in F1 characterised by blistering speed, brilliant tactical thinking, exemplary race craft, a razor-sharp eye for detail and a relentless determination to win.' />
      <Pilots
        imgPilot='charlesLeclerc'
        name='Charles Leclerc'
        country='Monaco'
        team='Scuderia Ferrari'
        review='Stepping up to F1 in 2018, Leclerc showed flashes of ballistic pace on Saturdays and racing brilliance on Sundays, dragging his Sauber beyond its limits and earning himself a money-cant-buy race seat at Ferrari for 2019, stepping into the shoes of the Scuderias last world champion, Kimi Raikkonen.' />
      <Pilots
        imgPilot='lewisHamilton'
        name='Lewis Hamilton'
        country='United Kingdom'
        team='Mercedes-AMG PETRONAS '
        review='Still I Rise  these are the words emblazoned across the back of Lewis Hamiltons helmet and tattooed across his shoulders, and ever since annihilating expectations with one of the greatest rookie performances in F1 history in 2007, thats literally all hes done: risen to the top of the all-time pole positions list ahead of his hero Ayrton Senna, surged into first place in the wins column surpassing the inimitable Michael Schumacher, and then matched the legendary Germans seven world titles.' />
      <Pilots
        imgPilot='carlosSsainz'
        name='Carlos Sainz'
        country='Spain'
        team='Scuderia Ferrari'
        review='After entering F1’s Bull Ring paired alongside Max Verstappen at Toro Rosso in 2015, Sainz quickly showed his fighting spirit. A tenacious racer, he puts the car on the edge as he hustles his way through the pack. No wonder Sainz has earned the nickname Chilli.' />
      <Pilots
        imgPilot='landoNorris'
        name='Lando Norris'
        country='United Kingdom'
        team='McLaren Formula 1 Team'
        review='Paired with the highly-rated – and far more experienced – Carlos Sainz, his rookie season was impressive, Norris edging the Spaniard in their head-to-head qualifying battle, scoring points 11 times, and only narrowly missing out on a top-10 championship placing.' />    
        
        <div>

          <h1 className='titleTwo'>Who do you think will be champion this year?</h1>
          <div className='containerChampions'>

            <PilotsList 
              pilot={currentPilots}
              onPilotClick={onClickListpilots}
            />

            <DisplayPilots pilot={currentPilots} />

          </div>

        </div> 
    </div>
  );
};

export default App;







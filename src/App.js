import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import cardData from 'd:/selfinterest/React/free code camp/project/src/Components/CardData';
import Card from './Components/Card';

function App() {
  const carddata = cardData.map(item => (
    <Card
      key={item.id}  
      {...item}
    />
  ));

  return (
    <div className="App">
      <Navbar />
      <div className='whole-wrapper'>
      {carddata}
      </div>
    </div>
  );
}

export default App;

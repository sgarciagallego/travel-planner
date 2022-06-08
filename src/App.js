import React from 'react';
import Data from './data/Data'
import Navbar from './components/Navbar';
import Card from './components/Card'

function App() {
  const card = Data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Preveza</h1>
        {card}
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import prevezaData from './data/Preveza';
import Preveza from './components/Preveza';
import lefkadaData from './data/Lefkada';
import Lefkada from './components/Lefkada';

function App() {
  const prevezaCard = prevezaData.map(item => {
    return (
      <Preveza 
        key={item.id}
        item={item}
      />
    )
  })

  const lefkadaCard = lefkadaData.map(item => {
    return (
      <Lefkada 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='preveza--container'>
          <h1>Preveza</h1>
          {prevezaCard}
        </div>
        <div className='lefkada--container'>
          <h1>Lefkada</h1>
          {lefkadaCard}
        </div>
      </div>
    </div>
  );
}

export default App;
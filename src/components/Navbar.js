import React from 'react';
import Taxi from './icons/Taxi'
import Bus from './icons/Bus'
import CoastGuard from './icons/CoastGuard'
import Emergency from './icons/Emergency';

const Navbar = () => {
  return (
    <header>
      <div className='container--logo'>
        <a href='/'>
          <span id='logo'>travel planner.</span>
        </a>
      </div>
      <nav>
        <ul>
          <li><Taxi /></li>
          <li><Bus /></li>
          <li><CoastGuard /></li>
          <li><Emergency /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
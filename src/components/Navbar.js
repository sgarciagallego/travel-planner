import React from 'react';
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
          <li><a href='/'>Taxi Service</a></li>
          <li><a href='/'>KTEL Bus</a></li>
          <li><CoastGuard /></li>
          <li><Emergency /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
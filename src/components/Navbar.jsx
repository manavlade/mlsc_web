import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import mlscLogo from '../assets/mlsclogo.png'

const Navbar = () => {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div>
      <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className='flex-center | nav-wrapper'>
          <div className='flex-center | logo'>
            <img src={mlscLogo} className='mlsc_logo'></img>
            <h3>MLSC<span>VCET</span></h3>
          </div>
          <ul className='nav-link_container'>
            <li className='nav-link nav-link-ltr'><Link to="/">Home</Link></li>
            <li className='nav-link nav-link-ltr'><NavLink to="/about">About</NavLink></li>
            <li className='nav-link nav-link-ltr'><NavLink to="/team">Team</NavLink></li>
            <li className='nav-link nav-link-ltr'><NavLink to="/events">Events</NavLink></li>
            <li className='nav-link nav-link-ltr'><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
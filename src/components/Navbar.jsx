import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav id='navbar'>
      <div className='nav-wrapper'>
      <div className='logo'>
        <h3>MLSC<span>VCET</span></h3>
      </div>
      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
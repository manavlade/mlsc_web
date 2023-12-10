import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav id='navbar'>
      <div className='nav-wrapper'>
      <div className='logo'>
        <h3>MLSC<span>VCET</span></h3>
      </div>
      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
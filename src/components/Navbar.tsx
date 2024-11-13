import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/mood-selection">Mood Selection</Link>
      <Link to="/playlists">Playlists</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;

import React from 'react'
import'./Header.scss';
import Logo from"../Header/image/Logo.png";
import { Link } from 'react-router-dom';
import{ImSearch} from "react-icons/im"

export const Header = () => {
  console.log(Logo)
  return (
    
    <nav className="header">
      <img src={Logo} alt="" />
      <div>
        <Link to="/tvshow">TV Shows</Link>
        <Link to="/tvshow">Movies</Link>
        <Link to="/tvshow">Recently Added</Link>
        <Link to="/tvshow">My List</Link>
        
      </div>
      <ImSearch/>

    </nav>
    
  )
}


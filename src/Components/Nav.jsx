import React from 'react'
import { Link, NavLink } from 'react-router-dom'
 
const Nav = () => {
  return (
    <div>
      <nav className='flex justify-center gap-5 '>
        <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to="/">Home</NavLink>
        <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "")}
         to="/Create">Book Entry</NavLink>
        <NavLink className={(e) => (e.isActive ? "text-red-400" : "")}
        to="/show">Library</NavLink>
    </nav>
    </div>
  )
}
export default Nav

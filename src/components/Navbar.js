import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = "text-purple-700 hover:text-purple-900 px-3 py-2 font-semibold";
  const activeClass = "underline";

  return (
    <nav className="bg-white bg-opacity-90 shadow-md p-4 rounded mb-6">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
            Skills & Interests
          </NavLink>
          <NavLink to="/contact" className={...}>Contact</NavLink>

           
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

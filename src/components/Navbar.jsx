import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="meny">
      <ul className="nav-links">
        <li>
          <NavLink to="/" style={{ fontFamily: 'Michroma', color: 'rgb(247,247,245)' }}>
            Paulina Porsmyr
          </NavLink>
        </li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
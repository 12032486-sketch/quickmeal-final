import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🍽️</span>
        <span>QuickMeal Finder</span>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
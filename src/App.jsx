import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🍽️ QuickMeal</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function Home() {
  const meals = ["Pizza", "Burger", "Shawarma", "Pasta", "Sushi"];
  const [meal, setMeal] = useState("");

  return (
    <div className="container">
      <h1>QuickMeal Finder 🍽️</h1>
      <button onClick={() =>
        setMeal(meals[Math.floor(Math.random()*meals.length)])
      }>
        Generate Meal
      </button>
      <h2>{meal}</h2>
    </div>
  );
}

function About() {
  return <h1 className="container">About Page</h1>;
}

function Features() {
  return <h1 className="container">Features Page</h1>;
}

function Contact() {
  return <h1 className="container">Contact Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
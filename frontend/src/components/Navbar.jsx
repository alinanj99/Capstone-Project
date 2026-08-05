import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <img src={logo} alt="Nova" width="180" />

     <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/favorites">Favorites</Link>
  <Link to="/ai-insights">AI Insights</Link>
  <Link to="/contact">Contact</Link>
    </nav> 

    </header>
  );
}
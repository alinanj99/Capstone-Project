import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import AIInsights from "./pages/AIInsights";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
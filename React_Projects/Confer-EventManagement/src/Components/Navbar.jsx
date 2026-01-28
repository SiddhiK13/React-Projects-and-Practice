import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <nav className="navbar">

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link to="/" onClick={()=> setMenuOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/About" onClick={()=> setMenuOpen(false)}>About</Link>
                </li>
                <li>
                    <Link to="/Speakers" onClick={()=>setMenuOpen(false)}>Speakers</Link>
                </li>
                <li>
                    <Link to="/Blog" onClick={()=>setMenuOpen(false)}>Blog</Link>
                </li>
                <li>
                    <Link to="/Contact" onClick={()=> setMenuOpen(false)}>Contact</Link>
                </li>

                <li className="nav-btn">
                    <Link to="/GetTickets" className="btn" onClick={()=> setMenuOpen(false)}>Get Tickets</Link>
                </li>
            </ul>

            {/* Hamburger Icon */}

            <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={()=> setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
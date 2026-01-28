import { useState } from "react";
import "./style.css";

let Navbar = (Props) => {

    let nav = Props.attr1;
    let logo = Props.attr2;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <p>
                <img className="logo" src={logo} alt="logo" />
            </p>

            {/* Hamburger icon (mobile only via CSS) */}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <nav>
                <ul className={`nav-parent ${menuOpen ? "active" : ""}`}>
                    <li><a href="">{nav[0]}</a></li>
                    <li><a href="">{nav[1]}</a></li>
                    <li><a href="">{nav[2]}</a></li>
                    <li><a href="">{nav[3]}</a></li>
                    <li><a href="">{nav[4]}</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

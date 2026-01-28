import "./Footer.css";
import logo from "../assets/logo.png";
import img1 from "../assets/21.jpg";
import img2 from "../assets/22.jpg";
import img3 from "../assets/23.jpg";
import img4 from "../assets/24.jpg";
import img5 from "../assets/25.jpg";
import img6 from "../assets/26.jpg";
import { FaFacebookF, FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand">
          <img src={logo} alt="" />
          <p>
            To take a trivial example, which of us ever undertakes
            laborious physical exercise, except to obtain
          </p>
          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedin /></span>
            <span><FaInstagram /></span>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📍 184 Main Collins Street</li>
            <li>📞 (226) 446 9371</li>
            <li>✉ confer@gmail.com</li>
            <li>🌐 www.confer.com</li>
          </ul>
        </div>

        {/* Workshops */}
        <div className="footer-col">
          <h4>Workshops</h4>
          <ul>
            <li>OSHA Compliance</li>
            <li>Microsoft Excel Basics</li>
            <li>Forum Speaker Series</li>
            <li>Tedx Moscow Conference</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="footer-col gallery">
          <h4>Gallery</h4>
          <div className="gallery-grid">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          Copyright ©2026 All rights reserved | This template is made
          with ❤️ by <span>Siddhi Kshirsagar</span>
        </p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

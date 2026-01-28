import "./Offer.css";
import icon1 from "../assets/icon.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";

import { FaMicrophone, FaBullseye, FaCoffee, FaRocket } from "react-icons/fa";

function Offer() {
  return (
    <section className="offer-section">
      <p className="offer-subtitle">SUMMIT MEETING</p>
      <h2 className="offer-title">WHAT WE OFFER</h2>

      <div className="offer-cards">
        <div className="offer-card">
          <div className="icon-circle">
            <img src={icon1} alt="" />
          </div>
          <h3>Conference</h3>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque
          </p>
        </div>

        <div className="offer-card">
          <div className="icon-circle">
            <img src={icon2} alt="" />
          </div>
          <h3>Workshops</h3>
          <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
          </p>
        </div>

        <div className="offer-card">
          <div className="icon-circle">
            <img src={icon3} alt="" />
          </div>
          <h3>Coffee Breaks</h3>
          <p>
            On the other hand, we denounce with righteous indignation
          </p>
        </div>

        <div className="offer-card">
          <div className="icon-circle">
            <img src={icon4} alt="" />
          </div>
          <h3>Events</h3>
          <p>
            These cases are perfectly simple and easy to distinguish
          </p>
        </div>
      </div>
    </section>
  );
}

export default Offer;

import "./TicketPricing.css";
import bgImg from "../assets/14.webp";

export default function TicketPricing() {
  return (
    <section
      className="pricing"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(236, 72, 153, 0.85),
          rgba(99, 102, 241, 0.85)
        ), url(${bgImg})`
      }}
    >
      <p className="pricing-subtitle">CHOOSE A TICKET</p>
      <h2 className="pricing-title">TICKET PRICING</h2>

      <div className="pricing-cards">
        {/* Card 1 */}
        <div className="pricing-card">
          <span className="badge pink">1 DAY PASS</span>
          <div className="icon">🎟️</div>
          <h3>$59</h3>
          <p className="per">per person</p>
          <button>GET TICKETS →</button>

          <ul>
            <li>✔ Single Day Access</li>
            <li>✔ Coffee Breaks</li>
            <li>✔ Lunch Included</li>
            <li className="disabled">✖ Workshop Access</li>
            <li className="disabled">✖ Networking Dinner</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="pricing-card active">
          <span className="badge blue">FULL PASS</span>
          <div className="icon">📘</div>
          <h3>$99</h3>
          <p className="per">per person</p>
          <button>GET TICKETS →</button>

          <ul>
            <li>✔ All Days Access</li>
            <li>✔ Coffee Breaks</li>
            <li>✔ Lunch Included</li>
            <li>✔ Workshop Access</li>
            <li>✔ Networking Dinner</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="pricing-card">
          <span className="badge pink">GROUP PASS</span>
          <div className="icon">👥</div>
          <h3>$199</h3>
          <p className="per">for 3 people</p>
          <button>GET TICKETS →</button>

          <ul>
            <li>✔ All Days Access (x3)</li>
            <li>✔ Coffee Breaks</li>
            <li>✔ Lunch Included</li>
            <li>✔ Workshop Access</li>
            <li>✔ VIP Networking Event</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

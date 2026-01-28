import "./AboutSection.css";
import aboutImg from "../assets/2.png";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-tag">ABOUT CONFERENCE</span>

          <h3>
            WELCOME TO THE PROJECT <br />
            MANAGEMENT
          </h3>

          <p>
            The Project Management is a platform to learn expert techniques for
            building successful project teams, creating efficient plans and
            implementing effective tracking measures to ensure your projects
            come in on deadline and on budget.
            In one fast-paced, well-designed day, we will cover all the essential
            elements of project management.
          </p>

          <button className="about-btn">INTERESTED →</button>
        </div>

        {/* RIGHT DESIGN */}
        <div className="about-visual">
          <img src={aboutImg} alt="Conference Speaker" />
        </div>

      </div>

      {/* COUNTDOWN INFO */}
      <div className="about-countdown">
        <div className="countdown-text">
          <span>CONFERENCE DATE</span>
          <h4>COUNT EVERY SECOND UNTIL THE EVENT</h4>
        </div>

        <div className="countdown-boxes">
          {[
            { value: 3, label: "Months" },
            { value: 9, label: "Days" },
            { value: 18, label: "Hours" },
            { value: 38, label: "Minutes" },
            { value: 36, label: "Seconds" }
          ].map((item, index) => (
            <div className="count-box" key={index}>
              <h3>{item.value}</h3>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

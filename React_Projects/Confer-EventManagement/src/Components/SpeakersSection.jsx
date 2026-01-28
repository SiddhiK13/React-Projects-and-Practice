import "./SpeakersSection.css";
import bgImg from "../assets/3.webp";
import img1 from "../assets/4.jpg";
import img2 from "../assets/5.jpg";
import img3 from "../assets/6.jpg";
import img4 from "../assets/7.jpg";
import img5 from "../assets/8.jpg";
import img6 from "../assets/9.jpg";


const speakers = [
  {
    name: "Albert Barnes",
    role: "Founder",
    img: img1
  },
  {
    name: "Patricia Stanley",
    role: "Product Lead",
    img: img2
  },
  {
    name: "Evelyn Stone",
    role: "Photographer",
    img: img3
  },
  {
    name: "Evelyn Stone",
    role: "Photographer",
    img: img4
  },
  {
    name: "Susan Hopkins",
    role: "UX Manager",
    img: img5
  },
  {
    name: "Michael Fowler",
    role: "Product Design",
    img: img6
  }
];


function SpeakersSection() {
  return (
    <section className="speakers-section" style={{ backgroundImage:`linear-gradient(
                      90deg,
                      rgba(236, 72, 153, 0.85),
                      rgba(99, 102, 241, 0.85)
                    ), url(${bgImg})`}}>
      <p className="subtitle">OUR SPEAKINGS</p>
      <h2 className="title">WHO'S SPEAKING</h2>

      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <img src={speaker.img} alt={speaker.name} />
            <div className="overlay">
              <h4>{speaker.name}</h4>
              <span>{speaker.role}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="view-btn">
        VIEW ALL SPEAKER →
      </button>
    </section>
  );
}

export default SpeakersSection;

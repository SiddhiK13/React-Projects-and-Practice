import "./schedule.css";
import img1 from "../assets/10.jpg";
import img2 from "../assets/11.jpg";
import img3 from "../assets/12.jpg";
import img4 from "../assets/13.jpg";
import { useState } from "react";

const schedules = {
  monday: [
    {
      title: "Dealing with Difficult People",
      speaker: "Gary Armstrong",
      role: "CEO of Confer",
      date: "12-14 Jan 2032",
      location: "Mountain Resort, Phoenix, USA",
      img: img1
    },
    {
        title: "Crop Insurance Conference",
        speaker: "Amanda Hudson",
        role: "CEO of Confer",
        date: "12-14 Jan 2032",
        location: "Mountain Resort, Phoenix, USA",
        img: img2
    },
    {
        title: "Street Food Convention",
        speaker: "Jeffrey Morales",
        role: "CEO of Confer",
        date: "12-14 Jan 2032",
        location: "Mountain Resort, Phoenix, USA",
        img: img3
    },
    {
        title: "Marketing Strategies",
        speaker: "Linda Thompson",
        role: "CMO of Confer",
        date: "12-14 Jan 2032",
        location: "Mountain Resort, Phoenix, USA",
        img: img4
    }
  ],
  tuesday: [
    {
      title: "Crop Insurance Conference",
      speaker: "Amanda Hudson",
      role: "CEO of Confer",
      date: "15 Jan 2032",
      location: "Mountain Resort, Phoenix, USA",
      img: img2
    },
    {
      title: "Street Food Convention",
      speaker: "Amanda Hudson",
      role: "CEO of Confer",
      date: "15 Jan 2032",
      location: "Mountain Resort, Phoenix, USA",
      img: img3
    }
  ],
  wednesday: [
    {
      title: "Street Food Convention",
      speaker: "Jeffrey Morales",
      role: "CEO of Confer",
      date: "16 Jan 2032",
      location: "Mountain Resort, Phoenix, USA",
      img: img3
    }
  ]
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("monday");

  return (
    <section className="schedule">
      <p className="subtitle">OUR TIMETABLE</p>
      <h2 className="title">SCHEDULE PLAN</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeDay === "monday" ? "active" : ""}
          onClick={() => setActiveDay("monday")}
        >
          Monday <br />
          <span>January 14, 2032</span>
        </button>

        <button
          className={activeDay === "tuesday" ? "active" : ""}
          onClick={() => setActiveDay("tuesday")}
        >
          Tuesday <br />
          <span>January 15, 2032</span>
        </button>

        <button
          className={activeDay === "wednesday" ? "active" : ""}
          onClick={() => setActiveDay("wednesday")}
        >
          Wednesday <br />
          <span>January 16, 2032</span>
        </button>
      </div>

      {/* Schedule Cards */}
      <div className="schedule-list">
        {schedules[activeDay].map((item, index) => (
          <div className="schedule-card" key={index}>
            <div className="left">
              <img src={item.img} alt={item.speaker} />
              <div>
                <h4>{item.title}</h4>
                <p>
                  by {item.speaker} <span>/ {item.role}</span>
                </p>
              </div>
            </div>

            <div className="middle">
              <p>📅 {item.date}</p>
              <p>📍 {item.location}</p>
            </div>

            <div className="right">
              <button className="view-btn">View More →</button>
            </div>
          </div>
        ))}
      </div>

      <button className="download-btn">
        DOWNLOAD SCHEDULE (PDF)
      </button>
    </section>
  );
}

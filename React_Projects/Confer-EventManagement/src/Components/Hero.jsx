import "./Hero.css";
import bgImg from "../assets/45.webp";

function Hero({title, subtitle}){
    return(
        <section className="Hero" style={{
                backgroundImage: `linear-gradient(
                  90deg,
                  rgba(236, 72, 153, 0.85),
                  rgba(99, 102, 241, 0.85)
                ), url(${bgImg})`
              }}> 
              <div className="Hero-content">
                <h1>{title}</h1>
                <p>Home &gt;{subtitle}</p>
              </div>
      
        </section>
    )
}

export default Hero;
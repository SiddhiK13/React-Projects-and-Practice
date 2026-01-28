import "./Sponsors.css";
import img1 from "../assets/p-1.png";
import img2 from "../assets/p-2.png";
import img3 from "../assets/p-3.png";
import img4 from "../assets/p-4.png";
import img5 from "../assets/p-5.png";
import img6 from "../assets/p-6.png";
import img7 from "../assets/p-7.png";
import img8 from "../assets/p-8.png";

const sponsors = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
];

function Sponsors(){
    return(
        <>
        <section className="sponsors">
            <p className="sponsors-subtitle">PARTNERS & SPONSORS</p>
            <h2 className="sponsors-title">OFFICIAL SPONSOR</h2>

            <div className="sponsor-grid">
                {
                    sponsors.map((img,index)=>(
                        <div className="sponsor-card" key={index}>
                            <img src={img} alt={`Sponsor ${index +1}`} />
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    );
}

export default Sponsors;
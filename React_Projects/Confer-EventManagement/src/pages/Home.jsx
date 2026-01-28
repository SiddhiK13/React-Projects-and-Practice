import AboutSection from "../Components/AboutSection";
import BlogSection from "../Components/BlogSection";
import ContactSection from "../Components/ContactSection";
import Schedule from "../Components/Schedule";
import SpeakersSection from "../Components/SpeakersSection";
import Sponsors from "../Components/Sponsors";
import TicketPricing from "../Components/TicketPricing";
import Footer from "../components/Footer";
import "./Home.css";


function Home(){
    return(
        <>
        <section className="hero">
            <div className="hero-content">
                <h1>SCIENCE<br />CONFERENCE</h1>
                <p>SHANGRI-LA HOTEL, BANGKOK, THAILAND</p><br /><br />
                <button>More Information</button>
            </div>
        </section>


        <AboutSection/>
        <SpeakersSection/>
        <Schedule/>
        <TicketPricing/>
        <Sponsors/>
        <BlogSection/>
        <ContactSection/>
        <Footer/>
        </>
    )
}

export default Home;
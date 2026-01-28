import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SpeakersSection from "../Components/SpeakersSection";
import Footer from "../Components/Footer";
import "./Speakers.css";

function Speakers(){
    return(
        <>
            <Navbar/>
            <Hero 
            title="SPEAKERS"
            subtitle="WHO'S SPEAKING"/>
            <SpeakersSection/>
            <Footer/>
        </>
    )
}

export default Speakers;
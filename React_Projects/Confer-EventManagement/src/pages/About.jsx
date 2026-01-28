import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import AboutSection from "../Components/AboutSection";
import Offer from "../Components/Offer";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        title="ABOUT US"
        subtitle="About us"
        />
        <AboutSection/>
        <Offer/>
        <Footer/>
        </>
    )
}

export default About;
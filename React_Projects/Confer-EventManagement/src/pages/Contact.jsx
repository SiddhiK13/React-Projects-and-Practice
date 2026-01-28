import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactSection from "../Components/ContactSection";
import Mapsection from "../components/Mapsection";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero 
        title="CONTACT US"
        subtitle="Contact"/>
        <ContactSection/>
        <Mapsection/>
        <Footer/>
        </>
    )
}

export default Contact;
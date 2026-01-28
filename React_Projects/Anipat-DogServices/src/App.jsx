import Navbar from "./Navbar";
import Banner from "./Banner";
import bannerImg from "/banner.png";
import TeamSection from "./TeamSection";
import WhySection from "./WhySection";
import FooterSection from "./FooterSection";

function App() {
  let nav = ["Home", "About", "Blog", "Projects", "Services", "Contact"];
  let logo = "/logo.png";
  let banner = "/banner.png";



  return (
    <>
      <Navbar attr1={nav} attr2={logo} />
      <Banner attr3={bannerImg} />
      <TeamSection/>
      <WhySection/>
      <FooterSection/>
    </>
  );
}

export default App;

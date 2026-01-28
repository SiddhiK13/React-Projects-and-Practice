import "./style.css";

function FooterSection() {
  const contact = {
    phone: "+555 0000 565",
    email: "Demomail@gmail.com",
    address: "700, Green Lane, New York, USA",
  };

  const services = [
    "Pet Insurance",
    "Pet Surgeries",
    "Pet Adoption",
    "Dog Insurance",
    "Cat Insurance",
  ];

  const quickLinks = [
    "About Us",
    "Privacy Policy",
    "Terms of Service",
    "Login Info",
    "Knowledge Base",
  ];

  const socialLinks = {
    facebook: "#",
    pinterest: "#",
    google: "#",
    linkedin: "#",
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Contact Column */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <p>{contact.address}</p>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h4>Our Services</h4>
          {services.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4>Quick Link</h4>
          {quickLinks.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* Logo / Brand Column */}
        <div className="footer-col logo-col">
          <img src="logo.png" className="footer-logo"/>
          <p>239 E 5th St, New York NY 10003, USA</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href={socialLinks.facebook} target="_blank">f</a>
            <a href={socialLinks.pinterest} target="_blank">p</a>
            <a href={socialLinks.google} target="_blank">G+</a>
            <a href={socialLinks.linkedin} target="_blank">in</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright ©2026 All rights reserved | This template is made with ❤️ by Siddhi
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;

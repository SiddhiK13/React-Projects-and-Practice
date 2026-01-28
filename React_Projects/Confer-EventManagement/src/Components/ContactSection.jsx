import "./ContactSection.css";

const ContactSection = () =>{
    return(
        <section className="contact-section">
            <div className="contact-container">
              {/* Contact Info */}
              <div className="contact-info">
                <h4>Contact Us</h4>
                <div className="info-item">
                  <span>Address:</span>
                  <p>184 Main Collins Street</p>
                </div>
                <div className="info-item">
                  <span>Phone:</span>
                  <p>(226) 446 9371</p>
                </div>
                <div className="info-item">
                  <span>Email:</span>
                  <p>confer@gmail.com</p>
                </div>
                <div className="info-item">
                  <span>Website:</span>
                  <p>www.confer.com</p>
                </div>
              </div>
      
              {/* Contact Form */}
              <div className="contact-form">
                <h4>Contact Us</h4>
                <form>
                  <div className="form-row">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="form-row">
                    <input type="email" placeholder="E-Mail" />
                    <input type="text" placeholder="Your Number" />
                  </div>
                  <textarea placeholder="Your Message *"></textarea>
                  <button type="submit">Send Message ➔</button>
                </form>
              </div>
            </div>
        </section>
    )
}

export default ContactSection;
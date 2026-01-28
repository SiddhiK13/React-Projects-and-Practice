import "./style.css";

function WhySection({
  title = "Why go with Anipat?",
  description = "Because we know that even the best technology is only as good as the people behind it. 24/7 tech support.",
  buttonText = "Contact Us",
  phone = "+880 4664 216",
  bgImage = "/contact_bg.png"
}) {
  return (
    <section
      className="footer-cta"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className="cta-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="cta-actions">
          <button className="cta-btn">{buttonText}</button>
          <span className="cta-phone">Or {phone}</span>
        </div>
      </div>
    </section>
  );
}

export default WhySection;

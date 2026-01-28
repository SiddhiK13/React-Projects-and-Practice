import "./BlogSection.css";
import img1 from "../assets/18.jpg";
import img2 from "../assets/19.jpg";
import img3 from "../assets/20.jpg";

const news = [
  {
    img: img1,
    title: "Street Food Convention",
    date: "January 14, 2032",
    author: "Laura Green",
    desc: "Street Food Convention will showcase products like Packed food, beef and lamb, street food."
  },
  {
    img: img2,
    title: "Tedx Moscow Conference",
    date: "January 14, 2032",
    author: "Laura Green",
    desc: "Street Food Convention will showcase products like Packed food, beef and lamb, street food."
  },
  {
    img: img3,
    title: "Los Angeles Institute",
    date: "January 14, 2032",
    author: "Laura Green",
    desc: "Street Food Convention will showcase products like Packed food, beef and lamb, street food."
  }
];

function BlogSection() {
  return (
    <section className="latest-news">
      <p className="news-subtitle">OUR BLOG</p>
      <h2 className="news-title">LATEST NEWS</h2>

      <div className="news-grid">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="news-content">
              <h3>{item.title}</h3>
              <div className="news-meta">
                <span>📅 {item.date}</span>
                <span>👤 {item.author}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;

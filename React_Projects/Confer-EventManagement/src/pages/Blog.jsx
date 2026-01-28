import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogSection from "../Components/BlogSection";
import Footer from "../components/Footer";
import "./Blog.css";

import img1 from "../assets/18.jpg";
import img2 from "../assets/19.jpg";
import img3 from "../assets/20.jpg";
import img4 from "../assets/21.jpg";
import img5 from "../assets/22.jpg";
import img6 from "../assets/23.jpg";

const blogData = [
  {
    img: img1,
    title: "Street Food Convention",
    date: "January 14, 2032",
    author: "Laura Green",
    desc: "Street Food Convention will showcase packed food and street culture."
  },
  {
    img: img2,
    title: "Tedx Moscow Conference",
    date: "February 10, 2032",
    author: "John Smith",
    desc: "A global stage for innovative ideas and technology."
  },
  {
    img: img3,
    title: "Los Angeles Institute",
    date: "March 5, 2032",
    author: "Emma Brown",
    desc: "A modern institute focusing on creative learning."
  },
  {
    img: img4,
    title: "Food & Wine Expo",
    date: "April 20, 2032",
    author: "Michael Lee",
    desc: "Taste premium wines and gourmet cuisines."
  },
  {
    img: img5,
    title: "Startup Meetup 2032",
    date: "May 11, 2032",
    author: "Sarah Johnson",
    desc: "Networking event for young entrepreneurs."
  },
  {
    img: img6,
    title: "Design Thinking Workshop",
    date: "June 2, 2032",
    author: "David Clark",
    desc: "Hands-on workshop on UI/UX and product design."
  }
];

function Blog() {
  return (
    <div className="blog-page">
      <Navbar />
      <Hero title="BLOG GRID" subtitle="Blog" />
      <BlogSection news={blogData} />
      <Footer />
    </div>
  );
}

export default Blog;

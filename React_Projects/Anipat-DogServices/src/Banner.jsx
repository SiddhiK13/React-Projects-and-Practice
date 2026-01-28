import "./style.css";

let Banner = ({ attr3 }) => {
    let dog = "/dog.png";
    let img1 = "/service_icon_1.png";
    let img2 = "/service_icon_2.png";
    let img3 = "/service_icon_3.png";
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${attr3})` }}>
                <div>
                    <p className="banner-text">
                        We Care <br />
                        <strong>Your Pets</strong>
                    </p>

                    <p className="para">
                        Lorem ipsum dolor sit amet consectetur, <br />
                        adipisicing elit. Quod sed soluta Molestias
                    </p><br />

                    <button className="contact-btn">Contact Us</button>
                </div>
                
                <div>
                    <img className="dog" src={dog} alt="Pet" />
                </div> 
            </div>

            {/* Services */}
            <div className="services">
                <h1 className="h1">Services for every dog</h1>

                <p className="p">
                    Lorem ipsum dolor lorem lsit amet consectetur rum, dolorconsectetur <br />
                    Incidunto ea id amet officia nisi commodi hic?
                </p>
            </div>


            <div className="cards">
                <div className="card">
                    <div className="icon-bg">
                        <img src={img1} className="icon" alt="Pet Boarding" />
                    </div><br />
            
                    <h4>Pet Boarding</h4><br />
                    <p>
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut
                    </p>
                </div>
            
                <div className="card">
                    <div className="icon-bg">
                        <img src={img2} className="icon" alt="Healthy Meals" />
                    </div> <br />
            
                    <h4>Healthy Meals</h4><br />
                    <p>
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut
                    </p>
                </div>
            
                <div className="card">
                    <div className="icon-bg">
                        <img src={img3} className="icon" alt="Pet Spa" />
                    </div><br />
            
                    <h4>Pet Spa</h4><br />
                    <p>
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut
                    </p>
                </div>
            </div>
           

           {/* About us */}

           <div className="about">
            <div>
                <img  className="catImg" src="/pet_care.png" alt="" />
            </div>
            <div>
                <h3>We Care your pet <br /> <b>As you care </b></h3><br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique <br /> unde sit sed accusantium id veniam voluptatibus error necessitati <br />bus dolores minus soluta dignissimos expedita ab, assumenda dicta. <br /> Omnis esse eos saepe!</p> <br />
                <button>About Us</button>
            </div>
           </div>

           {/* Contact Us */}
           <section className="contact">
            <div className="contact-text">
                <h6>We need your <br /><strong>help Adopt Us</strong></h6> <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat <br />pariatur beatae similique architecto consequuntur? Tenetur earum <br /> numquam voluptatem sapiente, tione error blanditiis natus.</p><br />
                <button>Contact Us</button>
            </div>
            <div className="contact-cards">
                <div className="contact-card-1">
                    <img src="/1.png" alt="" />
                    <h4>52+</h4>
                    <p>Pets Available</p>
                </div>
                <div className="contact-card-2">
                    <img src="/2.png" alt="" />
                    <h4>452</h4>
                    <p>Pets Available</p>
                </div>
                <div className="contact-card-3">
                    <img src="/3.png" alt="" />
                    <h4>52+</h4>
                    <p>Pets Available</p>
                </div>
            </div>
           </section>

           {/* review section */}

           <section className="review-section">
            <div className="review-card">
                <div>
                    <img src="/review1.png" alt="" />
                </div>
                <div className="review-text">
                    <h6>Jhon Walker</h6>
                    <p>Head of Design</p><br />
                    <p className="review-p">Lorem consectetur adipisicingconsectetur adipisicing elit. Do <br />loribus itaque consectetur adipisicingnum quod in aperiam <br /> mollitia, harum odio minus optiodio minus optio. Alias.</p>
                </div>
            </div>
           </section>
           
        </>

    );
};

export default Banner;

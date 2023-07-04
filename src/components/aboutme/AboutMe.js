function AboutMe() {
    return (
        <div>
            <img className="banner-img" src={require("../../images/home-banner.jpg")}></img>
            <div className="about">
                <p>I live in Iowa but spent most of my life in California and Nebraska. I am a web developer, graphic designer, podcaster, creative writer, and former YouTuber.</p>
            </div>
            <h2 id="About-Me" className="about-h2">About Me</h2>
            <br></br>
            <h2 id="Contact" className="contact-h2">Contact</h2>
            <div className="contact">
                <p><i className="fa-solid fa-phone"></i> (619) 755-2515</p>
                <br></br>
                <p>
                    <a href="emailto:jgalindo1428@yahoo.com"><i className="fa-solid fa-envelope fa-2xl"></i></a> <a href="https://www.linkedin.com/in/jessie-galindo-09418092/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-2xl"></i></a> <a href="https://github.com/MrMessyFace" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2xl"></i></a> <a href="https://www.facebook.com/MrMessyFace" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook fa-2xl"></i></a> <a href="https://www.twitter.com/MrMessyFace" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter fa-2xl"></i></a> <a href="https://www.instagram.com/MrMessyFace" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-2xl"></i></a> <a href="https://www.tiktok.com/@mrmessyface" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok fa-2xl"></i></a>
                </p>
                <br></br>
            </div>
        </div>
    )
}

export default AboutMe

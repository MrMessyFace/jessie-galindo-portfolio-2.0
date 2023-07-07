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
                <div id="contact">
                    <div>
                        <div>
                            <h2>CONTACT ME</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <form name="contact" method="POST">
                                <input type="hidden" name="form-name" value="contact" />
                                <div>
                                    <input type="hidden" name="form-name" value="contact" />
                                    <label htmlFor="first-name">First name</label>
                                    <div>
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name">Last name</label>
                                    <div>
                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <div>
                                        <input id="email" name="email" type="email" autoComplete="email" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone-number">Phone Number</label>
                                    <div>
                                        <div>
                                            <label htmlFor="country">Country</label>
                                            <select id="country" name="country">
                                                <option>US</option>
                                                <option>CA</option>
                                                <option>EU</option>
                                            </select>
                                        </div>
                                        <input type="text" name="phone-number" id="phone-number" autoComplete="tel" placeholder="+1 (555) 867-5309" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <div>
                                        <textarea id="message" name="message" rows={4} defaultValue={''} required />
                                    </div>
                                </div>
                                <div>
                                    <div></div>
                                </div>
                                <div>
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

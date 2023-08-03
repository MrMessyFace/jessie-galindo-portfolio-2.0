import pdf from "../assets/pdfs/jessie-galindo-resume-2023.pdf";

function Navbar() {
  return (
    <header className="header">
      <img
        className="header img"
        src={require("../assets/images/jessie-galindo-avatar.jpg")}
        alt="Jessie Galindo"
      ></img>
      <h1 className="header h1">Jessie S. Galindo</h1>
      <nav>
        <a href="#index.html">Home</a>
        <a href="#About-Me">About Me</a>
        <a href="#Contact">Contact</a>
        <a href="#Portfolio">Portfolio</a>
        <div className="dropdown">
          <button className="dropbtn">Outside Work</button>
          <div className="dropdown-content">
            <a href="#">The Messed Up Wrestling Podcast (COMING SOON!)</a>
            <a
              href="http://officialmessedupcomics.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Messed Up Comics
            </a>
            <a
              href="https://www.youtube.com/@IABProductions"
              target="blank"
              rel="noopener noreferrer"
            >
              IAB Productions
            </a>
          </div>
        </div>
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a
          href="https://messedupwrestling.myspreadshop.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merch
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./assets/css/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

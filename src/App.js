import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./assets/css/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Portfolio />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;

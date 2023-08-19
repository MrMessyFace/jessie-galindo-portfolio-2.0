import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import MorePortfolioPage from "./pages/MorePortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./assets/css/App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/more-portfolio" component={MorePortfolioPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

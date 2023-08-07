import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddPortfolio from "./pages/AddPortfolio";
import NotFound from "./pages/NotFound";
import "./assets/css/App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/more-portfolio" component={AddPortfolio} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

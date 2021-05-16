import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jumbotron from "./Components/Jumbotron";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Gallery from "./image_gallery/gallery";
import Home from "./home/Home";
import AppDashboard from "./myApps/AppDashboard";
import Contact from "./contact/contact";
import ChartComponents from "./myApps/CovidProject/ChartComponents";
import MistryBox from "./myApps/Mistry/Mistry";
import WeatherReport from "./myApps/Weather/Weather";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={AppDashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/chart" component={ChartComponents} />
        <Route path="/mistry" component={MistryBox} />
        <Route path="/weather" component={WeatherReport} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;

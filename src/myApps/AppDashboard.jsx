import React, { Component } from "react";
import "./../home/home.css";
import "./AppDashboard.css";

class AppDashboard extends Component {
  state = {};

  onClickHandler = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/gallery");
    }, 300);
  };

  chartHandler = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/chart");
    }, 300);
  };

  onClickHome = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    console.log(this.props);
    setTimeout(() => {
      this.props.history.push("/home");
    }, 300);
  };

  mistryHandler = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/mistry");
    }, 300);
  };

  weatherHandler = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/weather");
    }, 300);
  };

  onClickContact = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/contact");
    }, 300);
  };

  componentDidMount() {
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    var el = document.getElementById("test");

    if (el) {
      hamburger_menu.addEventListener("click", () => {
        container.classList.toggle("active");
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="navbar">
            <div className="menu">
              <h3 className="logo">
                SHUBHAM<span>KUMAR</span>
              </h3>
              <div className="hamburger-menu" id="test">
                <div className="bar"></div>
              </div>
            </div>
          </div>

          <div className="main-container">
            <div className="main">
              <header>
                <div className="overlay">
                  <div className="inner"></div>
                </div>
                <div className="body">
                  <div className="card-container">
                    <div className="card" onClick={this.chartHandler}>
                      <div className="box">
                        <div className="content">
                          <h1 className="name">My Covid App</h1>
                          <div className="barIcon">
                            <i className="fa fa-bar-chart"></i>
                            <p className="AppName">CO-Track</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="box" onClick={this.weatherHandler}>
                        <div className="content">
                          <h1 className="name">My Weather App</h1>
                          <div className="barIcon">
                            <i className="fa fa-cloud"></i>
                            <p className="AppName">Weather</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="box" onClick={this.mistryHandler}>
                        <div className="content">
                          <div className="questionIcon">
                            <i className="fa fa-question"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="shadow one"></div>
            <div className="shadow two"></div>
          </div>

          <div className="links">
            <ul>
              <li>
                <button className="nav-btn" onClick={this.onClickHome}>
                  Home
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={this.onClickHandler}>
                  Gallery
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={this.onClickContact}>
                  Contact
                </button>
              </li>
              <li>
                <button className="nav-btn">About</button>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppDashboard;

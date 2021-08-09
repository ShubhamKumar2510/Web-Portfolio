import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  onClickHandler = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/gallery");
    }, 300);
  };

  onClickDashboad = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/dashboard");
    }, 300);
  };

  onClickHome = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/home");
    }, 300);
  };

  componentDidMount() {
    const hamburger_menu = document.querySelector(".hamburger-menuc");
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
              <h3 className="logoc">
                SHUBHAM<span>KUMAR</span>
              </h3>
              <div className="hamburger-menuc" id="test">
                <div className="barc"></div>
              </div>
            </div>
          </div>

          <div className="main-container">
            <div className="main">
              <header>
                <div className="overlayc">
                  <div className="innerc">
                    <div>
                      <h1>CONTACT ME ON SOCIAL MEDIA</h1>
                      <div className="social-media">
                        <a href="/home">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="/home">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="/home">
                          <i className="fa fa-whatsapp"></i>
                        </a>
                        <a href="/home">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a href="/home">
                          <i className="fa fa-youtube"></i>
                        </a>
                        <a href="/home">
                          <i className="fa fa-linkedin"></i>
                        </a>
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
                <button className="nav-btn" onClick={this.onClickDashboad}>
                  Dashboard
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

export default Contact;

import React, { Component } from "react";

class Home extends Component {
  onClickHandler = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/gallery");
    }, 300);
  };

  onClickContact = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/contact");
    }, 300);
  };

  onClickDashboad = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/dashboard");
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
                  <div className="inner">
                    <h2 className="title">Shubham Kumar</h2>
                    <p>
                      Passionate web developer, skilled in{" "}
                      <i>
                        HTML, CSS, Javascript, Bootstrap, Angular,Typescript,
                        React.
                      </i>{" "}
                      Can create seamless UX and UI with creative and functional
                      designs.
                    </p>
                    <button className="home-btn">
                      <a
                        href="https://drive.google.com/file/d/1U9fXnio_y0gabbhOUK8eGSxQfHrCl2SD/view?usp=sharing"
                        target="_blank"
                      >
                        Resume
                      </a>
                    </button>
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

export default Home;

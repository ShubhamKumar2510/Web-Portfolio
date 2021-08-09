import React, { Component } from "react";
import styles from "./Mistry.css";

class MistryBox extends Component {
  Application = (function () {
    var canvas;
    var ctx;
    var imgData;
    var pix;
    var WIDTH;
    var HEIGHT;
    //let flickerInterval;

    var init = function () {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      canvas.width = WIDTH = 700;
      canvas.height = HEIGHT = 500;
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.fill();
      imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
      pix = imgData.data;
      setInterval(flickering, 30);
    };

    var flickering = function () {
      for (var i = 0; i < pix.length; i += 4) {
        var color = Math.random() * 255 + 50;
        pix[i] = color;
        pix[i + 1] = color;
        pix[i + 2] = color;
      }
      ctx.putImageData(imgData, 0, 0);
    };

    return {
      init: init,
    };
  })();

  componentDidMount() {
    this.Application.init();
  }

  dashboardHandler = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <React.Fragment>
        <span id="maintance" onClick={this.dashboardHandler}>
          under maintenance
        </span>
        <div onClick={this.dashboardHandler} className={styles.frame}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div onClick={this.dashboardHandler} className={styles.caps}>
          <img
            onClick={this.dashboardHandler}
            src="http://ademilter.com/caps.png"
            alt=""
          />
        </div>
        <canvas onClick={this.dashboardHandler} id="canvas"></canvas>
      </React.Fragment>
    );
  }
}

export default MistryBox;

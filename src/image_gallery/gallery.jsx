import React, { Component } from "react";

import './gallery.css';
import './../home/home.css';


import img1 from './../assets/img1.jpg'
import img2 from './../assets/img2.jpg'
import img3 from './../assets/img3.jpg'
import img4 from './../assets/img4.jpg'
import img5 from './../assets/img5.jpg'
import img6 from './../assets/img6.jpg'
import img7 from './../assets/img7.jpg'
import img8 from './../assets/img8.jpg'
import img9 from './../assets/img9.jpg'
import img10 from './../assets/img10.jpg'
import img11 from './../assets/img11.jpg'
import img12 from './../assets/img12.jpg'
import img13 from './../assets/img13.jpg'
import img14 from './../assets/img14.jpg'
import img15 from './../assets/img15.jpg'
import img16 from './../assets/img16.jpg'
import img17 from './../assets/img17.jpg'
import img18 from './../assets/img18.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    EffectFlip,Pagination,Navigation
  } from 'swiper/core';

  SwiperCore.use([EffectFlip,Pagination,Navigation]);



class Gallery extends Component {

  onClickHome = () => {  
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/home")
    }, 300);
  };

  onClickDashboard = () =>{
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/dashboard")
    }, 300);
  };

  onClickContact = () =>{
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    setTimeout(() => {
      this.props.history.push("/contact")
    }, 300);
  };

    componentDidMount(){
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");
    var el = document.getElementById('test');
    
    if(el){
    hamburger_menu.addEventListener("click", () => {
      container.classList.toggle("active");
    });
    }
  }

    render() {
        return (
            <div>
            <div className="container">
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">SHUBHAM<span>KUMAR</span></h3>
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
               
                <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper"   >
                
                
                    <SwiperSlide><div className="border" ><img src={img1} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img2} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img3} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img4} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img5} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img6} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img7} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img8} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img9} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img10} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img11} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img12} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img13} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img14} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img15} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img16} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img17} alt="" width="300px" height="450px"/></div></SwiperSlide>
                    <SwiperSlide><div className="border" ><img src={img18} alt="" width="300px" height="450px"/></div></SwiperSlide>
                
                
                
                </Swiper>
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
            <button className="nav-btn" onClick={this.onClickHome}>Home</button>
          </li>
          
          <li>
            <button className="nav-btn" onClick={this.onClickDashboard}>DashBoard</button>
          </li>
         
          <li>
            <button className="nav-btn" onClick={this.onClickContact}>Contact</button>
          </li>
          <li>
            <button className="nav-btn">About</button>
          </li>
        </ul>
      </div>
    </div>
    </div>
            
           
            
        

            
           );
    }
}

export default Gallery;

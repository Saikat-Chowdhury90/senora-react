import React from "react";
import "./Main.css";
const Main = () => {
  
  return (
    <div className="main-container">
      <div className="parent">
        <div className="main-details">
          <div className="back-img">
            <div className="main-img">
              <img src={require("../../images/building.jpg")} alt="" />  
            </div>
            <div className="left-img">
              <img src={require("../../images/back.jpg")} alt="boy" />
            </div>
            <div className="right-img">
              <div>
                <img
                  className="flower"
                  src={require("../../images/flower.jpg")}
                  alt="flower"
                />
                <img
                  className="couple"
                  src={require("../../images/couple.jpg")}
                  alt="couple"
                />
                <img
                  className="dog"
                  src={require("../../images/dog.jpg")}
                  alt="dog"
                />
              </div>
            </div>
          </div>
          <div className="main-header">
            <div className="main-nav-bar">
              <nav className="main-nav">
                <ul className="main-ul">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="mag-glass">
                    <a href="/">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </li>
                  
                </ul>
              </nav>
            </div>
          </div>
          <div className="intro-content">
            <div className="intro-heading">
              <h1>Hello,I am</h1>
              <h1>SOUMYA DAS</h1>
            </div>
            <div className="intro-para">
              <p>Director,Photographer</p>
            </div>
            <div className="view-btn">
              <button type="submit">View projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

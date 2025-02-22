import React, { useState } from "react";
import "./nav.css";
import images from "../../assets/mostafalogo.png";
import { Button } from "react-bootstrap";
export default function Nav() {
  const [logoup, setLogo] = useState(false);

  var logo = () => {
    setLogo(!logoup);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div
            className="logonav"
            onMouseEnter={() => {
              setLogo(true);
            }}
            onMouseLeave={() => {
              setLogo(false);
            }}
          >
            <img src={images} alt="" className="imgnav" />
            Mostafa
          </div>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="btnnav">
                <a href="#home"> Home </a>
              </li>
              <li className="btnnav">
                <a href="#header"> About me </a>
              </li>
              <li className="btnnav">
                {" "}
                <a href="#skills"> Skills </a>
              </li>
              <li className="btnnav">
                {" "}
                <a href="#education"> Education </a>
              </li>
              <li className="btnnav">
                {" "}
                <a href="#services"> Services </a>
              </li>
              <li className="btnnav">
                {" "}
                <a href="#work"> Portfolio </a>
              </li>
              <li className="btnnav">
                <a href="#contact"> Contact me </a>
              </li>
       
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

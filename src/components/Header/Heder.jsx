import React, { useEffect } from "react";

import "./heder.css";
import file from "../../assets/Mostafa-Hisham_CV.pdf";
import imagess from "../../assets/IMG-20200728-WA0010(1).png";

import Aos from "aos";
import "aos/dist/aos.css";
import ScrollUpButton from "../home/ScrollUpButton";

const summery =
  "Front-End Developer with experience in building and optimizing user interfaces using React.js, Redux, and TypeScript. Skilled in developing ERP systems, dashboards, and e-commerce platforms, with a strong focus on responsive design, state management, and seamless API integration. Proficient in modern frameworks like Next.js, PrimeReact, and Tailwind CSS, ensuring high-performance and scalable applications. Passionate about delivering intuitive user experiences and collaborating with cross-functional teams to create efficient web solutions.";
export default function Heder() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="about container section" id="header">
      <h2 data-aos="fade-right" className="section__title">
        About Me
      </h2>
      <div className="about__container grid" id="about">
        <img
          data-aos="flip-right"
          src={imagess}
          alt=""
          className="about__img"
        />
        <div data-aos="fade-up" className="about__data ">
          <div className="about__info">
            <p className="about__description">{summery}</p>
            <div>
              <a href={file} download="" className="btn">
                Download CV
              </a>
            </div>
          </div>
          {/* <div className="about__skills grid">
            <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage Javascript"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React Js</h3>
                  <span className="skills__number ">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Angular</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage Angular"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React Native</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage native"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Next Js</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage next"></span>
                </div>
              </div>
            </div> */}
        </div>
      </div>
      {/* <Aboutbox/>      */}
      <ScrollUpButton />
      {/* <a href='#home' className="scrollup"><i class="fa-solid fa-arrow-up"></i></a> */}

    </section>
  );
}

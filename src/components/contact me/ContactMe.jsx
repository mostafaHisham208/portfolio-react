import React,{useEffect} from "react";
import "./contact.css";

import Aos from 'aos'
import 'aos/dist/aos.css' 

export const ContactMe = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="contact container section" id="contact">
      <h2 data-aos="fade-right" className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 data-aos="fade-up" className="contact__title">Let's talk about everything!</h3>
          <p  data-aos="fade-up" className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div data-aos="fade-up" className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div data-aos="fade-up" className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            </div> 
            <div data-aos="fade-up" className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>
            <div data-aos="fade-up" className="contact__form-div contact__form-area">
              <textarea
                type="text"
                className="contact__form-input"
                placeholder="Write your message"
                cols="20"
                rows="10"
                name=""
                id=""
              />
            </div>
          
          <button data-aos="fade-up"  className="btn"> Send Message</button>
        </form>
      </div>
    </section>
  );
};

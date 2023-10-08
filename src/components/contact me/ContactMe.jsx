import React,{useEffect,useRef} from "react";
import emailjs from '@emailjs/browser';

import { Id, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";

import Aos from 'aos'
import 'aos/dist/aos.css' 

export const ContactMe = () => {
  const form = useRef();
  const notify = () => {

    toast.success("Email Send Successefuly  !", {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const notify1 = () => {
    toast.error("Error,some thing happen!", {
      position: toast.POSITION.TOP_LEFT
    });
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ko77pjk', 'template_7ljlqel', form.current, 'wEwYa4jTJEM9rSM7_')
      .then((result) => {
          console.log(result.text);
          notify();
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          notify1();
      });
  };
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
        <form action="" ref={form} className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div data-aos="fade-up" className="contact__form-div">
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div data-aos="fade-up" className="contact__form-div">
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            </div> 
            <div data-aos="fade-up" className="contact__form-div">
              <input
                type="text"
                name="subject"
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
                name="message"  
              />
            </div>
          
          <button data-aos="fade-up" type="submit"  className="btn"> Send Message</button>
        </form>
      </div>
      <ToastContainer />

    </section>
  );
};

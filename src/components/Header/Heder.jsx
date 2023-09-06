import React from 'react'
import Nav from './Nav'
import { Button } from 'react-bootstrap'

import './heder.css'
import file from "../../assets/Mostafa-Hisham.pdf.pdf"
import imagess from '../../assets/IMG-20200728-WA0010(1).png'
import Aboutbox from './aboutbox'

export default function Heder() {
  return (
    <section className='about container section' id='header'>
       <h2 className="section__title">About Me</h2>
       <div className="about__container grid" id='about'>
          <img src={imagess} alt='' className='about__img'/>
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">I am Mostafa Hisham, web developer from Giza, Egypt. Seeking a challenge position in a reputable company where I can
use my knowledge in the field of Front-end Web & and mobile
development and enhance my skills in the field of architecture while
contributing to the company’s growth.</p>
              <a href="" className="btn">Download CV</a>
            </div>
            <div className="about__skills grid">
            <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage Javascript"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React js</h3>
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
                  <h3 className="skills__name">React native</h3>
                  <span className="skills__number">65%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage native"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Aboutbox/>      
        {/* <div className='headercontent'>
          <div className='comp'>
        <div className='name'>
          mostafa hisham 
          <div className='myjob'>i am a front end developer </div>
          <a  href={file} download="MyExampleDoc" rel="noreferrer" target='_blank'>
                    <Button variant="dark"> Download CV</Button>
                  </a> 
        </div>
        <div>
          <img  src={imagess}  className='about_img'  alt="" />
        </div>
        </div>
        </div> */}
    </section>
  )
}

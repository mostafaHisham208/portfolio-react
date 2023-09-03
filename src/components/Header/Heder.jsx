import React from 'react'
import Nav from './Nav'
import { Button } from 'react-bootstrap'

import './heder.css'
import file from "../../assets/Mostafa-Hisham.pdf.pdf"
import imagess from '../../assets/IMG-20200728-WA0010(1).png'

export default function Heder() {
  return (
    <div className='heder' id='header'>
       <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid"> 
          <img src={imagess} alt='' className='about__img'/>
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and
               building and customization, also I am good at WordPress.</p>
              <a href="" className="btn">Download CV</a>
            </div>
            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Development</h3>
                  <span className="skills__number ">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">UI/UX design</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage ui__design"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Photography</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage photography"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>

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
    </div>
  )
}

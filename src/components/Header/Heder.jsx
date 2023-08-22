import React from 'react'
import Nav from './Nav'
import { Button } from 'react-bootstrap'

import './heder.css'
import file from "../../assets/Mostafa-Hisham.pdf.pdf"
import imagess from '../../assets/IMG-20200728-WA0010(1).png'

export default function Heder() {
  return (
    <div className='heder' id='header'>
        <Nav/>
        <div className='headercontent'>
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
        </div>
    </div>
  )
}

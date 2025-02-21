import React, { useEffect,useState } from 'react'
import me from '../../assets/mostafalogo.png'
import { Hedersocial } from './hedersocial'
import './home.css'
import { Scrolldown } from './Scrolldown'
import { Shapes } from './Shapes'
import { Button } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css' 


export const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const [mode,setmode]=useState('true');
     const setdarkmode=()=>{
       document.querySelector("body").setAttribute('data-theme','dark')
       setmode("false");
     }
     const setlightmode=()=>{
      document.querySelector("body").setAttribute('data-theme','light')
      setmode("true");
    }
    
  return (
    <section className="home container" id='home'>
        <div className="intro">
        <div className='home__describtion'>
            <h1 data-aos="fade-right" className="home__name">Mostafa Hisham</h1>
            <span data-aos="fade-up" className="home__education">I am front end developer </span>
            <Hedersocial />

            <a href="#contact" className="btn">Hire Me</a>
            </div>
            <div data-aos="flip-right" className='home__img-cont'>
            <img src={me} alt="" className='home__img' />
            
            </div>
            <div className="theme-color">
            {mode==="true"?  <Button className='dark' onClick={setdarkmode}><i class="fa-solid fa-moon"></i></Button>
             : <Button className='light' onClick={setlightmode}><i className="fa-solid fa-sun"></i></Button> 
            }
             </div>
        </div>
        <Scrolldown/>

        <Shapes/>
    </section>
  )
}

import React from 'react'
import me from '../../assets/mostafalogo.png'
import { Hedersocial } from './hedersocial'
import './home.css'
import { Scrolldown } from './Scrolldown'
import { Shapes } from './Shapes'
export const Home = () => {
  return (
    <section className="home container" id='home'>
        <div className="intro">
        <div className='home__describtion'>
            <h1 className="home__name">Mostafa Hisham</h1>
            <span className="home__education">I am front end developer </span>
            <Hedersocial/>

            <a href="#contact" className="btn">Hire Me</a>
            </div>
            <div className='home__img'>
            <img src={me} alt="" style={{width:'70%',borderRadius:'50%'}} className='home__img' />
           <Scrolldown/>
            
            </div>
          
        </div>
        <Shapes/>
    </section>
  )
}

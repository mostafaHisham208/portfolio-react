import React,{useEffect} from 'react'
import './heder.css'

import Aos from 'aos'
import 'aos/dist/aos.css' 

const Aboutbox = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div className="about__boxs grid">
        <div data-aos="fade-up" className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
                <h3 className="about__title">198</h3>
                <span className='about__subtitle'>project complete</span>
            </div>
        </div>

        <div data-aos="fade-up" className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">5670</h3>
                <span className='about__subtitle'>Cup of coffee</span>
            </div>
        </div>

        <div data-aos="fade-up" className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">427</h3>
                <span className='about__subtitle'>Satisfied clients</span>
            </div>
        </div>

        <div data-aos="fade-up" className="about__box">
            <i className="about__icon icon-badge"></i>
            <div>
                <h3 className="about__title">35</h3>
                <span className='about__subtitle'>Nominees winner</span>
            </div>
        </div>
    </div>
  )
}

export default Aboutbox
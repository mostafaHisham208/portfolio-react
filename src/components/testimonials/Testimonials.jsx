import React,{useEffect} from 'react'
import DataC from './DataC'
import './testimonials.css'
// import Swiper core and required modules
import {Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Aos from 'aos'
import 'aos/dist/aos.css'
const Testimonials = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <section className="testimonials container section">
        <h2 data-aos="fade-right" className="section__title">Clients & Reviews</h2>
        <Swiper  className="testimonials__container grid"
             // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}  
        >
            {DataC.map(({id,image,title,subtitle,comment})=>{
                return(
                    <SwiperSlide className="testimonials__item" key={id}>
                        <div data-aos="flip-left"  className="thumb">
                            <img  src={image} alt="" />
                        </div>
                        <h3 data-aos="flip-left" className="testimonial__title">{title}</h3>
                        <span data-aos="flip-left" className="subtitle">{subtitle}</span>
                        <div data-aos="fade-up" className="comment">{comment}</div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials
import React, { useEffect } from 'react'
import './services.css'
import image1 from  '../../assets/service-1.svg'
import image2 from  '../../assets/service-2.svg'
import image3 from  '../../assets/service-3.svg'


import Aos from 'aos'
import 'aos/dist/aos.css' 



const data = [
  {
    id: 1,
    image: image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: image3,
    title: "Mobile app development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];


export default function Services() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (  
    <section className="services container section" id='services'>
      <h2 data-aos="fade-right"  className="section__title">Services</h2>
      <div  className="services__container grid">
        {data.map(({id,image,title,description})=>{
            return(
              <div data-aos="flip-left" className="services__card" key={id}>
                <img data-aos="fade-up" src={image} alt="" className="services__img" />
                <h3 data-aos="fade-up" className="services__title" >{title}</h3>
                <p className="services__description">{description}</p> 
              </div>
            )
        })}
      </div>
    </section> 

  )

}
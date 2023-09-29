import React, { useState,useEffect } from 'react'
import Menu from './Menu'
import './portfolio.css'


import Aos from 'aos'
import 'aos/dist/aos.css' 



const Portfolio = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    const [items,setitems]=useState(Menu)
    const filterby=(cat)=>{
         const filter=Menu.filter((itemselem)=>{
            return  itemselem.category===cat;
         })
         setitems(filter)
    }
  return (
    <section className="work container section" id='work'>
        <h2 data-aos="fade-right" className="section__title">Recent works</h2>
        <div className="work__filters">
            <span className="work__item" onClick={()=>setitems(Menu)}>every thing</span>
            <span className="work__item" onClick={()=>filterby('react js')}>react js</span>
            <span className="work__item" onClick={()=>filterby('angular')}>angular</span>
            <span className="work__item" onClick={()=>filterby('react native')}>react native</span>
            <span className="work__item" onClick={()=>filterby('Next js')}>next js</span>
          
        </div>

        <div className="work__container grid">
          {items.map((elem)=>{
             const{id,image,title,category,link,git}=elem;
            return(
                <div data-aos="flip-right" className="work__card" key={id}>
                    <div className="work__thumbnail">
                        <img src={image} alt="" className="work__img" />
                        <div className="work__mask"></div>
                    </div>
                    <span className="work__category">{category}</span>
                    <h3 className="work__title">{title}</h3>
                    <a href={link} target='_blank' className="work__button">
                        {/* <i className="icon-link work__button-icon"></i> */}
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </a>
                     <a href={git} target='_blank' className="git__button">
                     <i class="fa-brands fa-github"></i>  
                    </a>

                </div>
            )
          })}            
        </div>
    </section>
  )
}

export default Portfolio
import React, { useState } from 'react'
import Menu from './Menu'
import './portfolio.css'
const Portfolio = () => {
    const [items,setitems]=useState(Menu)
    const filterby=(cat)=>{
         const filter=Menu.filter((itemselem)=>{
            return  itemselem.category===cat;
         })
         setitems(filter)
    }
  return (
    <section className="work container section" id='work'>
        <h2 className="section__title">Recent works</h2>
        <div className="work__filters">
            <span className="work__item" onClick={()=>setitems(Menu)}>every thing</span>
            <span className="work__item" onClick={()=>filterby('react js')}>react js</span>
            <span className="work__item" onClick={()=>filterby('angular')}>angular</span>
            <span className="work__item" onClick={()=>filterby('react native')}>react native</span>
            <span className="work__item" onClick={()=>filterby('javascript')}>javascript</span>
          
        </div>

        <div className="work__container grid">
          {items.map((elem)=>{
             const{id,image,title,category,link}=elem;
            return(
                <div className="work__card" key={id}>
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

                </div>
            )
          })}            
        </div>
    </section>
  )
}

export default Portfolio
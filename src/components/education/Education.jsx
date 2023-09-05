import React from 'react'
import './education.css'
import mee from '../../assets/images.jpg'
import  Card from './Card'
import Data from './Data'

export const Education= () => {
  return (
    <section className="skills container section" id='education'>
      <h2 className="section__title" >Education</h2>
      <div className='skills__container grid'>
        <div className="timeline grid">
          {Data.map((val,id) =>{
            if(val.category==='education'){
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val,index)=>{
            if(val.category==="experience"){
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }
          })}
        </div>

      </div>
    </section>
    // <div id='skills' className='skills container'>
    //   <h3>projects</h3>
    //    <div className='projectcards grid'>
    //     <Card className='cardproj'>
    //       <img src={mee} alt="" />
    //       <div className='card__mask'>
    //         <span className='work__cat'>class</span>
    //         <h3 className='work__title'>amazon</h3>
    //         <a href="www.google.com" className='work__button'>go </a>
    //       </div>
    //     </Card>
    //     <Card className='cardproj'>
    //       <img src={mee} alt="" />
    //       <div className='card__mask'>
    //         <span className='work__cat'>class</span>
    //         <h3 className='work__title'>amazon</h3>
    //         <a href="www.google.com" className='work__button'>go </a>
    //       </div>
    //     </Card> 
    //     <Card className='cardproj'>
    //       <img src={mee} alt="" />
    //       <div className='card__mask'>
    //         <span className='work__cat'>class</span>
    //         <h3 className='work__title'>amazon</h3>
    //         <a href="www.google.com" className='work__button'>go </a>
    //       </div>
    //     </Card> 
    //     <Card className='cardproj'>
    //       <img src={mee} alt="" />
    //       <div className='card__mask'>
    //         <span className='work__cat'>class</span>
    //         <h3 className='work__title'>amazon</h3>
    //         <a href="www.google.com" className='work__button'>go </a>
    //       </div>
    //     </Card> 
    //     <Card className='cardproj'>
    //       <img src={mee} alt="" />
    //       <div className='card__mask'>
    //         <span className='work__cat'>class</span>
    //         <h3 className='work__title'>amazon</h3>
    //         <a href="www.google.com" className='work__button'>go </a>
    //       </div>
    //     </Card>
    //      <Card className='cardproj'>
    //       <img src={mee} alt="" />
    //       <div className='card__mask'>
    //         <span className='work__cat'>class</span>
    //         <h3 className='work__title'>amazon</h3>
    //         <a href="www.google.com" className='work__button'>go </a>
    //       </div>
    //     </Card>
    //     </div>
    // </div>
  )
}

import React from 'react'
import './education.css';
const Card = (props) => {
  return (
    <div className='timeline__item'>
        <i className={props.icon}></i>
        <span className="timeline__data">{props.data}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text">{props.desc}</p>  
    </div>
  )
}

export default Card
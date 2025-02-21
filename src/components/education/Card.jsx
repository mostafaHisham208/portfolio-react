import React from 'react'
import './education.css';
const Card = ({props}) => {
  console.log(props);
  return (
    <div className='timeline__item'>
        <i
         className={props?.icon} 
        ></i>
        <span >{props?.year}</span>

        <span className="timeline__data">{props?.data}</span>
        <h3 className="timeline__title">{props?.title}</h3>
        <p className="timeline__text">{props?.desc}        {props?.link ? <a href={props?.link}  target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a> : ""}
 </p>  
    </div>
  )
}

export default Card
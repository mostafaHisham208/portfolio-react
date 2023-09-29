import React,{useEffect} from 'react'
import './skills.css'

import img1 from '../../assets/icon-1.png'
import img2 from '../../assets/icon-2.png'
import img3 from '../../assets/icon-3.png'
import img4 from '../../assets/icon-4.png'
import img5 from '../../assets/bootstrap2.png'
import img6 from '../../assets/tailwind.png'
import img7 from '../../assets/angular.png'
import img8 from '../../assets/firebase2.png'
import img9 from '../../assets/next1.png'
import img10 from '../../assets/icon-6.png'


import Aos from 'aos'
import 'aos/dist/aos.css' 


const data1=[
    {id:1,img:img1,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"HTML5"},
    {id:2,img:img2,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"CSS3"},
    {id:3,img:img3,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"JAVASCRIPT"},
    {id:4,img:img4,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"SASS"},
    {id:5,img:img5,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"BOOTSTRAP"},
    {id:6,img:img6,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"TAILWIND"},
    {id:7,img:img7,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"ANGULR"},
    {id:8,img:img8,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"FIREBASE"},
    {id:9,img:img10,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"REACT"},
    {id:10,img:img9,desc:"i have a lot fo knowledge in the field of Front-end Web ",title:"NEXT JS"},

]

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='skill container section' id='skills'>
       <h2 data-aos="fade-right" className="section__title">Skills</h2>
       <div className='skill__container'> 
        {data1.map((item)=>(
            <div data-aos="flip-left" key={item.id} className='carditem'>
                <img src={item.img} width={120} height={120} alt=''/>
                <h4 className='card__title'>{item.title}</h4>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Skills
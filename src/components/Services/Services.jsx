import React, { useState,useEffect } from 'react'
import { Card } from 'react-bootstrap'
import './services.css'
import imgg from '../../assets/mostafalogo.png'
import image1 from  '../../assets/service-1.svg'
import image2 from  '../../assets/service-2.svg'
import image3 from  '../../assets/service-3.svg'
import image4 from  '../../assets/dash/Screenshot (161).png'
import image5 from  '../../assets/dash/Screenshot (162).png'
import image6 from  '../../assets/dash/Screenshot (164).png'

export default function Services() {
  const images=[ image1,image2,image3,image4,image5,image6]

  const  [currentimg,setcurrentimg] =useState(images[0]) 
  const  [count,setcount] =useState(0) 
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   let interval;
  //   if (!isHovered) {
  //     interval = setInterval(() => {
  //       $(".background").carousel("next");
  //     }, 3000);         
  //   }
  //   return () => clearInterval(interval);
  // }, [isHovered]);

   function changeImage() {
    setcurrentimg(images[count+1])
    setcount(count+1)

    // if (count < 6) {
      
    // } else {
    //     setcount(0)
    // }
    // setcount(count+1)

   }

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
  

  return (  
    <section className="services container section" id='services'>
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({id,image,title,description})=>{
            return(
              <div className="services__card" key={id}>
                <img src={image} alt="" className="services__img" />
                <h3 className="services__title">{title}</h3>
                <p className="services__description">{description}</p> 
              </div>
            )
        })}
      </div>
    </section> 
  //   <div id='services' className='services'> 
  //   <div className='titleServ'>
  //     <h2>MY SERVICES</h2>
  //  </div>
  //   <div className='bodyserv'>
  //   <Card className='servcard col-3 h-75'>
  //       <img src={currentimg}  alt=""  className='imgserv'/>
  //       <div className='cardtitle'>
  //       web development 
  //       </div>
  //       <div className='cardoutline'>
  //         <h3>mobile application</h3>
  //         <p>asde ldlfmldf wdlwddmlwd lcmld</p>
  //         <button className='btn w-50'>visit</button>
  //       </div>
  //       </Card>
  //       <Card className='servcard col-3 h-75'>
  //       <img src={currentimg}  alt=""  className='imgserv'/>
  //       <div className='cardtitle'>
  //       web development 
  //       </div>
  //       <div className='cardoutline'>
  //         <h3>mobile application</h3>
  //         <p>asde ldlfmldf wdlwddmlwd lcmld</p>
  //         <button className='btn w-50'>visit</button>
  //       </div>
  //       </Card>
  //       <Card className='servcard col-3 h-75'>
  //       <img src={currentimg}  alt=""  className='imgserv'/>
  //       <div className='cardtitle'>
  //       web development 
  //       </div>
  //       <div className='cardoutline'>
  //         <h3>mobile application</h3>
  //         <p>asde ldlfmldf wdlwddmlwd lcmld</p>
  //         <button className='btn w-50'>visit</button>
  //       </div>
  //       </Card>

  //   </div>
  //   </div>
  )

}
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './services.css'
import imgg from '../../assets/mostafalogo.png'
import image1 from  '../../assets/dash/Screenshot (158).png'
import image2 from  '../../assets/dash/Screenshot (159).png'
import image3 from  '../../assets/dash/Screenshot (160).png'
import image4 from  '../../assets/dash/Screenshot (161).png'
import image5 from  '../../assets/dash/Screenshot (162).png'
import image6 from  '../../assets/dash/Screenshot (164).png'

export default function Services() {
  const images=[ image1,image2,image3,image4,image5,image6]

  const  [currentimg,setcurrentimg] =useState(images[0]) 
  const  [count,setcount] =useState(0) 



   function changeImage() {
    setcurrentimg(images[count+1])
    setcount(count+1)

    // if (count < 6) {
      
    // } else {
    //     setcount(0)
    // }
    // setcount(count+1)


}
var timeInterval;
function changeDynamicImgs() {
   timeInterval = setInterval(changeImage, 100);

   
}
function stopMoveImages() {
    clearInterval(timeInterval);
}


  return (   
    <div id='services' className='services'> 
    <div className='titleServ'>
      <h2>MY SERVICES</h2>
   </div>
    <div className='bodyserv'>
        <Card className='col-3 h-75'>
        <img src={currentimg} className='imgserv' onMouseEnter={changeDynamicImgs} onMouseLeave={stopMoveImages} alt="" width={'100%'} height={'70%'} />
        <div className='cardtitle'>
        web design
        </div>
                </Card>
        <Card className='col-3 h-75'>
            <img src={currentimg} onMouseEnter={changeDynamicImgs}  onMouseLeave={stopMoveImages} className='imgserv' alt=""  />
            <div className='cardtitle'>
            mobile application

            </div>
        </Card>
        <Card className='col-3 h-75'>
        <img src={currentimg} onMouseEnter={changeDynamicImgs} onMouseLeave={stopMoveImages} alt=""  className='imgserv'/>
        <div className='cardtitle'>
        web development 
        </div>
        </Card>

    </div>
    </div>
  )
}

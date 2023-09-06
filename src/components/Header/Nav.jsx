import React, { useState } from 'react'
import './nav.css'
import imagess from '../../assets/mostafalogo.png'
import { Button } from 'react-bootstrap'
export default function Nav() {
  const [logoup,setlogo]=useState(false)

  var logo=()=>{
    setlogo(!logoup)
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <div className='logonav' onMouseEnter={()=>{setlogo(true)}} onMouseLeave={()=>{setlogo(false)}}>
          <img src={imagess} alt="" className='imgnav' />
          my portfolio
        </div>    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className='btnnav'><a href='#home'> Home </a></li>
      <li className='btnnav'><a href='#header'> About me </a></li>
            <li className='btnnav'> <a href='#education'> Education </a></li>
            <li className='btnnav'> <a href='#services'> Services </a></li>
            <li className='btnnav'> <a href='#work'> Portfolio </a></li>
            <li className='btnnav'> <a href='#pricing'> pricing </a></li>

            <li className='btnnav' ><a href='#contact'> Contact me </a></li>
            <li className='btnnav'  ><a href='#comments'> comments </a></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          setting
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">language</a></li>
            <li><a className="dropdown-item" href="#">theme</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    {/* <div className='nav'>
        <div className='logonav' onMouseEnter={()=>{setlogo(true)}} onMouseLeave={()=>{setlogo(false)}}>
          <img src={imagess} alt="" className='imgnav' />
          my portfolio
        </div>
        <ul className='listnav'>
            <li> <Button className='btnnav'><a href='#header'> About me </a></Button></li>
            <li> <Button className='btnnav'  > <a href='#header'> Education </a></Button></li>
            <li> <Button className='btnnav'  ><a href='#services'> Services </a></Button></li>
            <li> <Button className='btnnav' ><a href='#header'> Skills </a></Button></li>
            <li> <Button className='btnnav' ><a href='#header'> Contact me </a></Button></li>
            <li> <Button className='btnnav'  ><a href='#header'> comments </a></Button></li>

            
        </ul>
    </div> */}
    {/* <div onMouseEnter={()=>{setlogo(true)}} onMouseLeave={()=>{setlogo(false)}}  style={{display:logoup?'flex':'none' , width:"200px",height:"200px",border:"1px solid black",position:"absolute",top:'4rem',left:"2rem" }}></div> */}

</>
  )
}

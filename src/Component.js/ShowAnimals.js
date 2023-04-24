import React, { useState } from 'react'
import bird  from './Images/bird.svg'
import cat  from './Images/cat.svg'
import cow  from './Images/cow.svg'
import dog  from './Images/dog.svg'
import gator  from './Images/gator.svg'
import heart  from './Images/heart.svg'
import horse from './Images/horse.svg'
import '../Css/ShowAnimal.css'

export default function ShowAnimals({type}) {
    const svgMap = {
        bird,
        cat,
        cow,
        dog,
        gator,
        horse
        
    }
   const [click , setClick]= useState(4);


    const handleClick =()=>{
setClick(click+1)
    };
    

  return (
    <>
    <div className='animal-show' onClick={handleClick} >

    <img className='Img1' style={{width:'180px' , height:'180px'}}  src={svgMap[type]} alt="animals" />

    <img className='heart'  style={{width:click+'%' , height:click+'%' }}
     src={heart} alt="heart" />

    </div>



    </>
  )
}

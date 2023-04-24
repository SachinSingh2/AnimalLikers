import React, { useState } from 'react'
import ShowAnimals from './ShowAnimals'
import '../Css/Animal.css'


// Writing a function to get a random number
const getRandomAnimals = ()=>{
  const animals = ['bird' , 'cat' , 'cow' , 'dog' , 'gator' , 'horse']
  return animals[Math.floor(Math.random()*animals.length)]
}







 function Animal() {  // ---------------------------The animal function started
// Used a use state

const [animals , setanimals] = useState([])
    const handleclick = ()=>{
      setanimals([...animals , getRandomAnimals()])
      console.log(...animals)
    };


const renderdAnimals = animals.map((animal , index)=>{
return <ShowAnimals type={animal} key={index} />
});





  return (
    <>

<div className="Animals">
<button  onClick={handleclick} >Add Animal</button>
<div className='animal_list' >{renderdAnimals}</div>
</div>


    </>
  )
}
export default Animal

import React,{useState} from 'react'
import foodMenus from '../data.js'
import MenuCard from './MenuCard.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import settings from '../reactSlickSettings.js';


const MenuBar = () => {

  

    const [cardData, setCardData] = useState(foodMenus)
  return (
    <div className='py-6 px-6 lg:px-20'>
    <h1 className=' text-4xl font-bold ml-10 mb-4'> Whats in your mind ?</h1>
    <div className=" py-6 px-6">
  
  <Slider {...settings}>
   {foodMenus.map((item)=>(<div key={item.name}><MenuCard data = {item}/></div>))}
   </Slider>
   
   
 
  </div></div>
   
    
    
  )
}

export default MenuBar
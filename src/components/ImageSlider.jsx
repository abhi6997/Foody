import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = () => {

    const [slider,setSlider] = useState(0)
  const Images = [
    {
      url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];


   const handlePlus = ()=>{
     setSlider(slider === Images.length - 1 ? 0 : slider+1)
   }
   
   const handleMinus = ()=>{
    setSlider(slider < 0 ? 0 : slider-1)
  }


  useEffect(()=>{
   const autoChange =  setInterval(()=>{handlePlus()},2000)
   return () => clearInterval(autoChange)
  },[slider])
  return (
    <div className="relative w-[90%] h-[80vh] flex justify-center items-center mx-auto mt-6">
      {Images.map((item,index)=>(<div key={index} className={`${slider === index  ? "block" : "hidden" } w-full h-full rounded-lg`}><img src={item.url} alt="" className="w-full rounded-lg h-full object-cover" /></div>))}
      <div className=" bg-black absolute w-full h-full  opacity-50 rounded-lg"></div>

      <div><MdKeyboardArrowLeft size={60} className="cursor-pointer absolute top-[50%] left-4 text-white" onClick={handleMinus}/></div>
      <div><MdKeyboardArrowRight  size={60} className="cursor-pointer absolute top-[50%] right-4 text-white" onClick={handlePlus} /></div>
    </div>
  );
};

export default ImageSlider;

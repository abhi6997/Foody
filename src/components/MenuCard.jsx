import React from 'react'



const MenuCard = ({data}) => {
  return (
    <div className="flex items-center flex-col gap-2 py-2 px-2 shadow-2xl rounded-lg">
        <div className= "rounded-lg w-[14rem] h-[8rem] border-b border-black"><img src={data.imageLink} alt="error while rendering" className='rounded-lg h-full w-full'/></div>
        <p className=" text-sm font-bold text-center">{data.name}</p>
        <div className='flex justify-between gap-4'>
            <button className="py-2 text-white bg-black px-2 rounded-lg">{data.price} </button>
            <button className="py-2 text-white bg-black px-2 rounded-lg">Add to Cart</button>
        </div>
    </div>
  )

  }
export default MenuCard;
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import {  useDispatch, useSelector } from 'react-redux';
import { sideBarToggel } from '../features/sideBarSlice.js';

const SideBarComponent = ({navItems}) => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state)=>state.isSideBarNeeded)



  return (
    <div className=" absolute top-0 right-0 bg-orange-200 h-screen w-1/3 flex flex-col items-center justify-center  sm:hidden ">
  <div>
    <RxCross2 size={30} className=" cursor-pointer absolute  right-4 top-4 " onClick={()=>dispatch(sideBarToggel(!sideBar))} />
  </div>
  <div>
    <FaCartShopping
      size={50}
      className=" cursor-pointer absolute  left-4 top-4 "
    />
  </div>
  <ul className="flex gap-20 flex-col">
    {navItems.map((item) => (
      <li key={item.name}>
        <button>{item.name}</button>
      </li>
    ))}
  </ul>
</div>
  )
}

export default SideBarComponent
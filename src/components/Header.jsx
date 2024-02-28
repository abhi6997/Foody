import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import SideBarComponent from "./SideBarComponent.jsx";
import { FaCartShopping } from "react-icons/fa6";
import {  useDispatch, useSelector } from 'react-redux';
import { sideBarToggel } from '../features/sideBarSlice.js';


const Header = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state)=>state.isSideBarNeeded)

    
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About Us", slug: "/about" },
    { name: "Offers", slug: "/offers" },
    { name: "Sign In", slug: "/signin" },
  ];
  return (

<div className="flex justify-between py-[20px] px-[25px] text-[20px]  bg-orange-400   border-b border-black realtive">

      <div>
        <span className="font-bold text-yellow-400 bg-red-900 px-2">Food</span>
        <span className="font-bold text-red-900 bg-yellow-400 px-2">
          Maniac
        </span>
      </div>

      {sideBar ? <SideBarComponent navItems = {navItems} isSideBar={sideBar}/> :""}
      <div className=" hidden sm:block">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <button onClick={()=>(navigate(item.slug))}>{item.name}</button>
            </li>
          ))}
        </ul>
        </div>

      <div className="flex gap-4">
        <div>
          <GiHamburgerMenu
            size={30}
            className=" cursor-pointer  block sm:hidden"
            onClick={()=> dispatch(sideBarToggel(!sideBar))}
          />
        </div>
        <div>
          <FaCartShopping size={30} className=" cursor-pointer" />
        </div>
      </div>
    </div>

  );
};

export default Header;

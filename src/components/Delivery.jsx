import React from "react";

const Delivery = () => {
  return (
    <div className="px-16 py-8">
      <div className="flex flex-col items-center  ">
        <p className="text-3xl font-bold text-red-800">Get your best Delivery</p>
        <div className="flex justify-around items-center w-full flex-wrap py-8">
          <div className=" ">
            <img
              src="https://www.getfoodcourt.com/static/media/FC_two_phones.6ec9a842f905769677f9.webp"
              alt=""
              className="w-[550px] object-cover"
            />
          </div>
          <div className=" ">
           <p className="font-bold text-red-950  text-3xl sm:text-5xl lg:text-6xl">Get The App</p>
           <h2 className="text-4xl py-2 font-bold">Here,You get the Fastest Delivery In India</h2>
           <button className="bg-black w-[14rem] text-white rounded-lg my-6 py-4 text-3xl">Get Started</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

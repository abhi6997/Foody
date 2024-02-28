import React from 'react'

const Footer = () => {
  return (
    <div className=" flex justify-center items-center w-screen border-2 bg-black text-white py-[3rem]">
        <div className=" px-[3rem] flex justify-center gap-[6rem] flex-wrap">
          <div className="flex flex-col items-center gap-3">
            <p className="text-4xl ">
            <span className="font-bold text-yellow-400 bg-red-900 px-2 rounded-l-lg">Food</span>
            <span className="font-bold text-red-900 bg-yellow-400 px-2 rounded-r-lg">Maniac</span>
            </p>
            <p>@ 2024 Adani Technologies Pvt.Ltd</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-5 text-4xl">Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>Teams</p>
            <p>Swiggy One</p>
            
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-5 text-4xl">Help & Support</p>
            <p>Company</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-5 text-4xl">We deliver to: </p>
            <p>Banglore</p>
            <p>Gurgaon</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>pune</p>
          </div>



        </div>
    </div>
  )
}

export default Footer
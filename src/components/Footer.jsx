import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-t-[#9F9F9F] mt-7">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 p-4 sm:p-6 lg:p-8">
        
        {/* Left Section */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-7 lg:pl-4 xl:pl-20 text-center lg:text-left">
          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl font-poppins">Funiro.</h1>
          <p className="font-poppins font-medium text-sm sm:text-base text-[#9F9F9F] max-w-md mx-auto lg:mx-0">
            400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 lg:gap-16 xl:gap-25 justify-center lg:justify-between flex-1">
          
          {/* Links Column */}
          <ul className="font-poppins font-medium text-base space-y-4 sm:space-y-6 lg:space-y-7 text-center sm:text-left">
            <li className="text-[#9F9F9F]">Links</li>
            {[
              { name: "Home", to: "/" },
              { name: "Shop", to: "/shop" },
              { name: "About", to: "/about" },
              { name: "Contact", to: "/contact" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#B88E2F] underline underline-offset-4"
                      : "hover:text-[#B88E2F] hover:underline underline-offset-4 transition-all"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Help Column */}
          <ul className="font-poppins font-medium text-base space-y-4 sm:space-y-6 lg:space-y-7 text-center sm:text-left">
            <li className="text-[#9F9F9F]">Help</li>
            {[
              { name: "Payment Options", to: "/payment" },
              { name: "Returns", to: "/returns" },
              { name: "Privacy Policy", to: "/privacy-policy" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#000000] underline underline-offset-4"
                      : "hover:text-[#B88E2F] hover:underline underline-offset-4 transition-all"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Newsletter Column */}
          <div className="font-poppins font-medium text-base space-y-4 sm:space-y-6 lg:space-y-7 text-center sm:text-left min-w-[280px] sm:min-w-[300px]">
            <div className="text-[#9F9F9F]">Newsletter</div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-center">
              <input 
                type="email" 
                placeholder="Enter your Email address"
                className="flex-1 border-b-2 border-b-[#9f9f9f] pb-2 text-black bg-transparent placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-b-[#B88E2F] transition-colors w-full text-center sm:text-left"
              />
              <button className="border-b-2 border-b-[#9f9f9f] text-black font-medium pb-2 hover:border-b-[#B88E2F] hover:text-[#B88E2F] transition-colors whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t-2 border-t-[#9f9f9f] w-full sm:w-[90%] font-poppins font-normal mx-auto text-sm sm:text-base p-3 sm:p-4 text-center">
        <p>2023 furino. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
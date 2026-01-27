import React from "react";
import Button from "../Button";
import { assets } from "../../assets/assets";
import ImageCarousel from "./ImageCarousel";

const RoomExplore = () => {
  const slides = [
    assets.Room2,
    assets.Room3,
    assets.Room4,
  ];

  return (
    <>
      <div className="bg-[#FCF8F3] w-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        {/* Mobile Layout - Stack vertically */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between items-center lg:items-start">
          
          {/* Text Content Section */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
            <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-4">
              50+ Beautiful rooms<br className="hidden sm:block" /> inspiration
            </h1>
            <p className="font-medium font-poppins text-[#616161] text-sm sm:text-base mb-6 lg:mb-8">
              Our designer already made a lot of beautiful<br className="hidden sm:block" /> 
              prototype of rooms that inspire you
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="font-poppins font-semibold text-sm sm:text-base text-[#FFFFFF]">
                Explore More
              </Button>
            </div>
          </div>

          {/* Inspiration Image Section */}
          <div className="w-full lg:w-1/3 relative">
            <img 
              src={assets.Room1} 
              alt="bedroom inspiration" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />

            {/* Overlay Text */}
            <div className="flex items-end w-full absolute bottom-0 p-3 sm:p-4 md:p-6">
              <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg flex-1">
                <p className="text-xs sm:text-sm md:text-base font-normal font-poppins text-[#616161] leading-[150%]">
                  01 — Bed Room
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold text-[#3A3A3A] leading-[120%]">
                  Inner Peace
                </p>
              </div>
              <div className="ml-2 sm:ml-3">
                <button 
                  className="bg-[#B88E2F] text-white text-xl sm:text-2xl px-3 py-2 sm:px-4 sm:py-3 rounded hover:bg-[#9d7625] transition-colors duration-300"
                  aria-label="View room details"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-full lg:w-1/3">
            <ImageCarousel images={slides} interval={4000} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomExplore;
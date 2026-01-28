import React from "react";
import Showcase from "../../assets/images/showcase.svg";

const ImageGrid = () => {
  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
  
      {/* Background Image with responsive top margin */}
      <img 
        src={Showcase} 
        alt="grid showcase" 
        className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[90px] object-cover" 
      />

      {/* Overlay Text - Responsive positioning */}
      <div className="absolute top-2 sm:top-4 md:top-6 lg:top-8 xl:top-[50px] text-center px-4 w-full">
        <p className="text-[#616161] font-poppins font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-1 sm:mb-2">
          Share your setup with
        </p>
        <h3 className="text-[#3A3A3A] font-poppins font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4px] xl:tracking-[5px] leading-tight">
          #FuniroFurniture
        </h3>
      </div>

    </div>
  );
};

export default ImageGrid;
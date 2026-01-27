import React from "react";
import Showcase from "../../assets/images/showcase.svg";

const ImageGrid = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-8 sm:py-12 md:py-16">
      {/* Background Image */}
      <img 
        src={Showcase} 
        alt="grid showcase" 
        className="w-full h-auto object-cover" 
      />

      {/* Overlay Text */}
      <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 text-center px-4">
        <p className="text-[#616161] font-poppins font-semibold text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
          Share your setup with
        </p>
        <h3 className="text-[#3A3A3A] font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-[40px] tracking-[2px] sm:tracking-[3px] md:tracking-[5px]">
          #FuniroFurniture
        </h3>
      </div>
    </div>
  );
};

export default ImageGrid;
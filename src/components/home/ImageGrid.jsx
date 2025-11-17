import React from "react";
import Showcase from "../../assets/images/showcase.svg";

const ImageGrid = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
  
  {/* Background Image */}
  <img src={Showcase} alt="grid showcase" className="w-full mt-[90px]" />

  {/* Overlay Text */}
  <div className="absolute top-[50px] text-center">
    <p className="text-[#616161] font-poppins font-semibold text-lg">
      Share your setup with
    </p>
    <h3 className="text-[#3A3A3A] font-poppins font-bold text-[40px] tracking-[5px]">
      #FuniroFurniture
    </h3>
  </div>

</div>

  );
};

export default ImageGrid;

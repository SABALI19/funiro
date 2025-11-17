import React from "react";
import Button from "../Button";
import {assets} from "../../assets/assets";
import ImageCarousel from "./ImageCarousel";


const RoomExplore = () => {
    const slides =[
    
    assets.Room2,
    assets.Room3,
    assets.Room4,
    ];
  return (
    <>
      <div className="bg-[#FCF8F3] gap-4 w-full p-5 flex  justify-between sm:p-14 md:p-20">
        <div className=" w-1/3 md:w-[400px] item-center  border-amber-300  mt-42">
            <h1 className="font-poppins whitespace-nowrap text-60px] md:text-[40px] sm:text-[32px] font-bold leading-[1.1]">50+ Beautiful rooms <br className="hidden sm:block"/>inspiration</h1>
        <p className="font-medium font-poppins text-[#616161] text-base">Our designer already made a lot of beautiful 
            <br/>prototipe of rooms that inspire you</p>
         <Button className="font-poppins font-semibold text-base text-[#FFFFFF] mt-10">
        Explore More
      </Button>
        </div>

        {/* inpiration image */}
        <div className="w-1/3 relative">
          <img src={assets.Room1} alt="bed room inspiration" className="w-full h-auto object-cover  " />

          {/* layOver Texts  */}
          <div className="flex items-end  w-full absolute bottom-0 p- mb-6 ml-6">
            <div className="w-1/2 p-6 bg-white/40  ">
            <p className="text-base font-normal font-poppins text-[#616161] leading-[150%] ">01 — Bed Room</p>
            <p className="text-2xl font-poppins font-semibold text-[#3A3A3A]  whitespace-nowrap leading-[120%]">Inner Peace</p>
          </div>
          <div className="">
            <button className=" text-center px-2 py-1 - justify-center   bg-[#B88E2F] text-white text-2xl">→</button>
          </div>
          
          </div>
        </div>

              {/* carousel */}
       <div className="flex w-1/3">
            <ImageCarousel images={slides} interval={4000} />
        </div>
      </div>
     
    </>
  );
};

export default RoomExplore;

import React from "react";
import Trophy from "../assets/images/trophy 1.svg";
import warranty from "../assets/images/warranty.svg";
import shipping from "../assets/images/shipping.svg";
import support from "../assets/images/customer-support.svg"
import Footer from "../components/Footer";

const Promise = () => {
  return (
  <div className="w-full bg-[#FAF3EA] p-6 sm:p-12 lg:p-12">
  <div className="flex flex-nowrap justify-between items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto">
    
    {/* High Quality */}
    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
      <img 
        src={Trophy} 
        alt="award for competence" 
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex-shrink-0"
      />
      <div className="flex-shrink-0">
        <h1 className="font-poppins font-semibold text-base sm:text-lg lg:text-xl xl:text-[25px] text-[#242424] leading-tight whitespace-nowrap">
          High Quality
        </h1>
        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#898989] mt-1 whitespace-nowrap">
          crafted from top materials
        </p>
      </div>
    </div>

    {/* Warranty Protection */}
    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
      <img 
        src={warranty} 
        alt="guarantee on products" 
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex-shrink-0"
      />
      <div className="flex-shrink-0">
        <h1 className="font-poppins font-semibold text-base sm:text-lg lg:text-xl xl:text-[25px] text-[#242424] leading-tight whitespace-nowrap">
          Warranty Protection
        </h1>
        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#898989] mt-1 whitespace-nowrap">
          Over 2 years
        </p>
      </div>
    </div>

    {/* Shipping Promise */}
    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
      <img 
        src={shipping} 
        alt="guarantee on products" 
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex-shrink-0"
      />
      <div className="flex-shrink-0">
        <h1 className="font-poppins font-semibold text-base sm:text-lg lg:text-xl xl:text-[25px] text-[#242424] leading-tight whitespace-nowrap">
          Free Shipping
        </h1>
        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#898989] mt-1 whitespace-nowrap">
          Order over $150
        </p>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
      <img 
        src={support} 
        alt="dedicated support" 
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex-shrink-0"
      />
      <div className="flex-shrink-0">
        <h1 className="font-poppins font-semibold text-base sm:text-lg lg:text-xl xl:text-[25px] text-[#242424] leading-tight whitespace-nowrap">
          24/7 Support
        </h1>
        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#898989] mt-1 whitespace-nowrap">
          Dedicated Support
        </p>
      </div>
    </div>

  </div>
</div>
  );
};

export default Promise;

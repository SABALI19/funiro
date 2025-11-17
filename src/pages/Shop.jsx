import React from "react";
import HeroSection from "../components/HeroSection";
import Products from "../components/home/products";
// import SubLandingPage from "../components/FilterSection";
import Promise from "../components/Promise";
import FilterSection from "../components/FilterSection";
import Footer from "../components/Footer";

function Shop() {
  return (
    <>
      <div className="w-full">
        <div className="w-full ">
          <HeroSection heroHeading="Shop" heroTitle={Shop} />
          
        </div>
        <div>
          <FilterSection/>
        </div>

        <div className="mb-12">
          <Products showButton={false}  />
        </div>

        {/* //next page button// */}
        <div className="flex w-full items-center justify-center gap-4 mt-4 mb-12 ">
          <button className="p-4 bg-[#B88E2F] rounded-xl">1</button>
          <button className="p-4 bg-[#F9F1E7] rounded-xl">2</button>
          <button className="p-4 bg-[#F9F1E7] rounded-xl">3</button>
          <button className="p-3 bg-[#F9F1E7] rounded-xl">Next</button>
        </div>

        {/* //promise // */}
        <div >
          <Promise/>
        </div>

         {/* //Footer// */}
              <div>
                <Footer/>
              </div>
      </div>
    </>
  );
}

export default Shop;

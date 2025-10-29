import React from 'react'
import HeroSection  from "../components/HeroSection"

function Shop() {
  return (
    <div className="w-full">
      <HeroSection 
      heroHeading="Shop" 
      heroTitle={Shop}/>
      <h1 className="text-center">Welcome to Shop Page</h1>
    </div>
  ) 
}

export default Shop
import React from "react";
import HeroSection from "../components/HeroSection";
import BillingDetails from "../components/BillingDetails";

const Checkout = () => {
  return (
    <div>
      <HeroSection heroHeading="Checkout" heroTitle={Checkout} />
        <div>
            <BillingDetails/>
        </div>
    </div>
  );
};

export default Checkout;

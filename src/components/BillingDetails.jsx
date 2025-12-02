import { Phone } from "lucide-react";
import React, { useState } from "react";
import Promise from "./Promise";

const BillingDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    paymentMethod: "bank-transfer",
  });

  // maping of countries to cities /
  const locationData = {
    Nigeria: {
      cities: ["Lagos", "Abuja", "Kano", "Port Harcourt", "Ibadan"],
      provinces: [
        "Lagos State",
        "FCT",
        "Kano State",
        "Rivers State",
        "Oyo State",
      ],
    },
    Ghana: {
      cities: ["Accra", "Kumasi", "Tamale"],
      provinces: ["Greater Accra", "Ashanti", "Northern"],
    },
    Kenya: {
      cities: ["Nairobi", "Mombasa", "Kisumu"],
      provinces: ["Nairobi County", "Mombasa County", "Kisumu County"],
    },
    "United States": {
      cities: ["New York", "Los Angeles", "Chicago"],
      provinces: ["New York", "California", "Illinois"],
    },
    Canada: {
      cities: ["Toronto", "Vancouver", "Montreal"],
      provinces: ["Ontario", "British Columbia", "Quebec"],
    },
    Australia: {
      cities: ["Sydney", "Melbourne", "Brisbane"],
      provinces: ["New South Wales", "Victoria", "Queensland"],
    },
    India: {
      cities: ["Mumbai", "Delhi", "Bangalore"],
      provinces: ["Maharashtra", "Delhi", "Karnataka"],
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setFormData((prev) => ({
      ...prev,
      country,
      city: "",
      province: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
    // handle order submission
  };

  const countries = Object.keys(locationData);

  const getCities = (country) => locationData[country]?.cities || [];
  const getProvinces = (country) => locationData[country]?.provinces || [];

  // // function to get cities for selected country
  // const getCities = (country) => {
  //   return citiesByCountry[country] || [];
  // };

  // const countries = [
  //   'Sri Lanka',
  //   'United States',
  //   'United Kingdom',
  //   'Canada',
  //   'Australia',
  //   'India',
  //   'Nigeria'
  // ];

  // const province = [
  //   'guanzhou',
  // ]

  const orderSummary = {
    product: {
      name: "leviosa",
      quantity: 1,
      price: 250000.0,
    },
    subtotal: 250000.0,
    total: 250000.0,
  };

   return (
    <>
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold font-poppins text-[#000000] mb-8">
          Billing Details
        </h1>

        <div className="w-full gap-14 grid grid-cols-1 lg:grid-cols-2">
          {/* Billing Form */}
          <div className="shadow-sm p-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-poppins font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-4 border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-poppins font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-4 border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <h2 className="text-sm font-semibold font-poppins mb-3">
                  Company Name (Optional)
                </h2>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                />
              </div>

              {/* Country & Region */}
              <div>
                <h3 className="text-sm font-semibold mb-3">
                  Country / Region
                </h3>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleCountryChange}
                    required
                    className="w-full px-3 py-4 border text-[#9F9F9F] border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  >
                    <option value="">sri lanka</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="text-sm font-semibold font-poppins mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                />
              </div>

              {/* Town & City */}
              <div>
                <label className="text-sm font-semibold font-poppins mb-2">
                  Town / City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  disabled={!formData.country}
                >
                  <option value="">city</option>
                  {getCities(formData.country).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Province */}
              <div>
                <label className="text-sm font-semibold font-poppins mb-2">
                  Province
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-4 border text-[#9F9F9F] border-gray-300 rounded-md focus:outline-none focus:ring-2"
                  disabled={!formData.country}
                >
                  <option value="">select province</option>
                  {getProvinces(formData.country).map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold font-poppins mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2"
                />
              </div>
            </form>
          </div>

          {/* Order Summary & Payment Section */}
          <div className="p-6">
            {/* Order Summary Section */}
            <div className="mb-12">
              <div className="flex justify-between items-center text-xl font-semibold text-gray-800 mb-6">
                <h2>Product</h2>
                <h2>Subtotal</h2>
              </div>

              {/* Product Item */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h4 className="font-poppins text-lg font-semibold text-[#9F9F9F]">
                      {orderSummary.product.name}
                    </h4>
                    <span className="text-sm flex justify-between text-gray-600">
                      X {orderSummary.product.quantity}
                    </span>
                  </div>
                  <span className="font-normal font-poppins text-sm">
                    Rs. {orderSummary.product.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between">
                  <span className="font-normal font-poppins text-sm">
                    Subtotal
                  </span>
                  <span className="font-normal font-poppins text-sm">
                    Rs. {orderSummary.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span className="font-normal font-poppins text-sm">Total</span>
                  <span className="text-[#B88E2F] font-poppins font-bold text-2xl">
                    Rs. {orderSummary.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="mt-12">
              <h3 className="text-sm font-poppins font-normal text-gray-800 mb-4">
                Payment Methods
              </h3>

              {/* Bank Transfer */}
              <div className="flex items-start space-x-3 mb-6">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="paymentMethod"
                  value="bank-transfer"
                  checked={formData.paymentMethod === "bank-transfer"}
                  onChange={handleChange}
                  className="mt-1 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex-1">
                  <label
                    htmlFor="bank-transfer"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Direct Bank Transfer
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>

              {/* Cash on Delivery */}
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  id="cash-on-delivery"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  checked={formData.paymentMethod === "cash-on-delivery"}
                  onChange={handleChange}
                  className="mt-1 text-[#000000] focus:ring-[#000000]"
                />
                <label
                  htmlFor="cash-on-delivery"
                  className="block text-base font-medium font-poppins text-[#9F9F9F]"
                >
                  Cash On Delivery
                </label>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="mt-8 p-4 rounded-lg">
              <p className="font-normal text-base text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <strong>privacy policy</strong>.
              </p>
            </div>

            {/* Place Order Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="border font-poppins py-3 px-14 rounded-xl hover:bg-[#B88E2F] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-normal text-xl"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
    <div className="w-full">
        <Promise/>
      </div>
    </>
  );
};

export default BillingDetails;
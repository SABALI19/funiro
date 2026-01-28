import HeroSection from "../components/HeroSection";
import { MapPin, Phone, Clock } from "lucide-react";
import Promise from "../components/Promise";

function Contact() {
  return (
    <>
      <div className="w-full">
        <HeroSection heroHeading="Contact" />
      </div>

      <div className="w-full bg-white">
        <div className="flex flex-col justify-center items-center mt-12 md:mt-16 lg:mt-24 px-4">
          <h1 className="font-bold text-3xl sm:text-4xl font-roboto text-center">
            Get In Touch With Us
          </h1>
          <p className="max-w-4xl text-center text-[#9F9F9F] text-sm sm:text-[16px] font-poppins font-normal mt-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us
            <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
        </div>
        
        {/* Contact Info & Form Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-start gap-8 lg:gap-24 px-4 sm:px-6 py-8 sm:py-12">
          
          {/* left side - Fixed icon alignment */}
          <div className="w-full max-w-lg lg:max-w-md">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-[#B88E2F] w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-lg sm:text-xl font-roboto mb-2">Address</h2>
                <p className="text-[#9F9F9F] text-sm sm:text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* phone contact - Fixed */}
            <div className="flex items-start gap-4 mb-6">
              <Phone className="text-[#B88E2F] w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-lg sm:text-xl font-roboto mb-2">Phone</h2>
                <p className="text-[#9F9F9F] text-sm sm:text-base">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* work time - Fixed heading to "Working Time" */}
            <div className="flex items-start gap-4 mb-6">
              <Clock className="text-[#B88E2F] w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-lg sm:text-xl font-roboto mb-2">Working Time</h2>
                <p className="text-[#9F9F9F] text-sm sm:text-base">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* right side inputs section - Removed massive space */}
          <div className="w-full max-w-lg lg:max-w-md">
            <form className="flex flex-col gap-4 sm:gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium text-sm sm:text-base mb-1">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="eg:sabali..."
                  className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-sm sm:text-base mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              
              {/* subject - Fixed input type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-medium text-sm sm:text-base mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is optional"
                  className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>

              {/* Message - Fixed label */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-medium text-sm sm:text-base mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi, i'd like to ask about..."
                  rows="4"
                  className="border border-gray-300 p-3 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-2 sm:mt-4">
                <button
                  type="submit"
                  className="bg-[#B88E2F] text-white text-sm sm:text-base font-medium px-10 sm:px-14 py-3 rounded-sm hover:bg-[#a07b26] transition-all w-full sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Promise Section */}
      <div className="mt-8 sm:mt-12">
        <Promise />
      </div>
    </>
  );
}

export default Contact;
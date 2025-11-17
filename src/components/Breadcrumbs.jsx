import React from "react";
import heroIcon from "../icons/hero-icon.svg";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ productName }) => {
  return (
    <div>
      <nav className="w-full bg-color-peach p-10 aria-label font-poppins text-[#616161]">
        <ol className="flex items-center gap-2 ">
          {/* // Fix the Home link to include proper routing */}
          <li>
            <Link
              to="/"
              className="hover:text-[#B88E2F] transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          <span>
            <img src={heroIcon} alt="" />
          </span>

          <li>
            <Link
              to="/"
              className="hover:text-[#B88E2F] transition-colors duration-200"
            >
              shop
            </Link>
          </li>

          <span>
            <img src={heroIcon} alt="" />
          </span>

          <li className="text-[#3A3A3A] font-medium truncate max-w-[150px] md:max-w-none">
            {productName}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;

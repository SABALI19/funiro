import HeroSection from "../components/HeroSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { useState } from "react";

function SearchProductPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full">
      <HeroSection heroHeading="Search Products" />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs />
      </div>
      <div className="container mx-auto p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Search Products</h1>
          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#B88E2F] text-white p-2 rounded-lg">
              Search
            </button>
          </div>
          <p>Search results will appear here</p>
        </div>
      </div>
    </div>
  );
}

export default SearchProductPage;
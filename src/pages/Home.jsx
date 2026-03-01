import FeaturesSection from "../components/home/FeaturesSection";
import Button from "../components/Button";
import Product from "../components/home/products";
import RoomExplore from "../components/home/RoomExplore";
import ImageGrid from "../components/home/ImageGrid";
import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";



function Home() {
  const { products, loading, error } = useProduct();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#B88E2F]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold text-red-600 mb-4">Error Loading Products</h3>
        <p className="text-gray-500 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-[#A37E27] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section - Responsive */}
      <div
        className="relative w-full h-125 sm:h-150 md:h-175 lg:h-screen bg-cover bg-center p-4 sm:p-6 lg:p-8"
        style={{ backgroundImage: "url('/images/home-hero.svg')" }}
      >
        {/* Content Box - Responsive positioning and sizing */}
        <div className="absolute rounded-xl opacity-85 bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-12 lg:bottom-20 lg:right-20 
                        w-[calc(100%-2rem)] sm:w-100 md:w-125 lg:w-140 
                        px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 
                        bg-color-pink tracking-widest">
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
            New Arrival
          </p>
          <h1 className="font-extrabold text-[#B88E2F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins mt-2">
            Discover Our <br /> New Collection
          </h1>
          <p className="font-serif text-xs sm:text-sm md:text-base my-3 sm:my-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium deserunt totam illo quam officia.
          </p>

          {/* Reusable button - Responsive sizing */}
         <Link to="/shop">
          <Button 
          variant="primary" 
          size="md" 
          className="w-full rounded-xl sm:w-auto"
          
          >
            Buy Now
          </Button>
         </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <FeaturesSection />
      </div>

      {/* Products Section */}
      <div className="text-center my-8 sm:my-10 lg:my-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 px-4">
          Our Products
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 px-4">
          Browse our amazing collection
        </p>
        <Product products={products.slice(0, 8)} showButton={true} />
      </div>

      {/* Room Explore Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <RoomExplore />
      </div>

      {/* Image Grid Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
        <ImageGrid />
      </div>
    </>
  );
}

export default Home;
import FeaturesSection from "../components/home/FeaturesSection";
import Button from "../components/Button";
import Products from "../components/home/products";
import products from "../data/products";
import RoomExplore from "../components/home/RoomExplore";
import ImageGrid from "../components/home/ImageGrid";

function Home() {
  return (
    <>
      {/* Hero Section - Responsive */}
      <div
        className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen bg-cover bg-center p-4 sm:p-6 lg:p-8"
        style={{ backgroundImage: "url('/images/home-hero.svg')" }}
      >
        {/* Content Box - Responsive positioning and sizing */}
        <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-12 lg:bottom-20 lg:right-20 
                        w-[calc(100%-2rem)] sm:w-[400px] md:w-[500px] lg:w-[560px] 
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
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Buy Now
          </Button>
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
        <Products products={products.slice(0, 8)} showButton={false} />
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
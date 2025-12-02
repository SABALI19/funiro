import FeaturesSection from "../components/home/FeaturesSection";
import Button from "../components/Button";
import Products from "../components/home/products";
import products from "../data/products";
import RoomExplore from "../components/home/RoomExplore";
import ImageGrid from "../components/home/ImageGrid";

function Home() {
  return (
    <>
      <div
        className="relative w-full p-30 h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home-hero.svg')" }}
      >
        <div className="absolute bottom-20 right-20 w-140 h-100 px-5 py-12 bg-color-pink tracking-widest">
          <p className="font-sans text-2xl font-bold">New Arrival</p>
          <h1 className="font-extrabold text-[#B88E2F] text-5xl font-poppins">
            Discover Our <br /> New Collection
          </h1>
          <p className="font-serif text-base my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium deserunt totam illo quam officia.
          </p>

          {/* reusable button */}
          <Button  variant="primary" size="lg">
            Buy Now
          </Button>
        </div>
      </div>

      <div>
        <FeaturesSection />
      </div>

      <div className="text-center my-10">
        <Products products={products.slice(0, 8)} showButton={false} />
      </div>
      <div>
        <RoomExplore/>
      </div>
      <div>
        <ImageGrid/>
      </div>
      
    </>
  );
}

export default Home;

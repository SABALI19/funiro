
import HeroSection  from "../components/HeroSection"

function Home() {
  return (
   <>
    <div className=" relative w-full  p-30 h-screen bg-cover bg-center" style={{backgroundImage: 'url(./images/home-hero.svg)'}}>
<div className=" absolute bottom-20 right-20 w-140 h-100 text-ce px-5 py-12 bg-orange-100 tracking-widest ">
   <p className="font-sans text-2xl font-bold">
    New Arrival
   </p>
   <h1 className="font-extrabold text-yellow-600 text-5xl">
    Discover Our <br/> New Collection
   </h1>
   <p className="font-serif text-base my-4">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
       laudantium deserunt totam illo quam officia.
   </p>
   <button className="px-16 py-4 font-bold bg-amber-600 text-amber-50 text-base text-sm">Buy Now</button>
</div>
      
    </div>
    
   </>
  )
}

export default Home
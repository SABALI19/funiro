import heroIcon from "../icons/hero-icon.svg";

function HeroSection({ heroHeading, heroTitle }) {
  return (
    <>
      <div
        className="hero-section w-full h-80 bg-center bg-cover flex flex-col justify-center gap-4"
        style={{ backgroundImage: `url(./images/hero-background-image.svg)` }}
      >
      
      <div>
      <img
          className="w-25 mx-auto"
          src="./images/hero-logo2.svg"
          alt="logo"
        />
        <h1 className="text-6xl font-bold text-center">{heroHeading}</h1>
      </div>
         <div className="flex gap-2 items-center justify-center">
          <span>Home</span>
          <span>
            <img src={heroIcon} alt="hero section icon" />
          </span> 
          <span>{heroTitle}</span>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

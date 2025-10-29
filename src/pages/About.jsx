import HeroSection  from "../components/HeroSection"





function About() {
  return (
    <div className="w-full">
      <HeroSection heroHeading="About us" heroTitle={About}/>
      <h1 className="text-center">Welcome to About Page</h1>
    </div>
  )
}

export default About

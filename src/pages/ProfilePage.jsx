import HeroSection from "../components/HeroSection";
// import Breadcrumbs from "../components/Breadcrumbs";

function ProfilePage() {
  return (
    <div className="w-full">
      <HeroSection heroHeading="My Profile" />
      
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p>Your profile details will appear here</p>
      </div>
    </div>
  );
}

export default ProfilePage;
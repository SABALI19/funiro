import HeroSection from "../components/HeroSection";
import Breadcrumbs from "../components/Breadcrumbs";

function FavoritesPage() {
  return (
    <div className="w-full">
      <HeroSection heroHeading="My Favorites" />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs />
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Favorites Page</h1>
        <p>Your favorite products will appear here</p>
      </div>
    </div>
  );
}

export default FavoritesPage;
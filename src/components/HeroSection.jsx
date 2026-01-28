import { useLocation, Link, useParams } from "react-router-dom";
import heroIcon from "../icons/hero-icon.svg";

function HeroSection({ heroHeading }) {
  const location = useLocation();
  const params = useParams();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Custom display names for routes
  const getDisplayName = (segment, isLast) => {
    const nameMap = {
      '': 'Home',
      'cart': 'Cart',
      'checkout': 'Checkout',
      'contact': 'Contact',
      'about': 'About',
      'shop': 'Shop',
      'product': 'Product',
      'blog': 'Blog',
      'wishlist': 'Wishlist',
    };
    
    // Check if this is a product ID parameter
    if (segment === params.id && params.id) {
      return isLast ? heroHeading : 'Product';
    }
    
    return nameMap[segment.toLowerCase()] || 
           segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  };

  return (
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
      
      {/* Breadcrumbs Container */}
      <nav className="flex items-center justify-center" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {/* Home */}
          <li className="inline-flex items-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-[#B88E2F] transition-colors"
            >
              Home
            </Link>
          </li>
          
          {/* Dynamic segments */}
          {pathnames.map((segment, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = getDisplayName(segment, isLast);
            
            return (
              <li key={routeTo} className="inline-flex items-center">
                <img src={heroIcon} alt="›" className="w-3 h-3 mx-2" />
                {isLast ? (
                  <span className="text-sm font-medium text-[#B88E2F]">
                    {displayName}
                  </span>
                ) : (
                  <Link 
                    to={routeTo} 
                    className="text-sm font-medium text-gray-600 hover:text-[#B88E2F] transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

export default HeroSection;
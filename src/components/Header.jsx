import { NavLink }  from "react-router-dom"
import NavIcons from "./NavIcons"

const Header = () => {

    const Links =[
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Shop",
            path: "/shop"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ];

    
  return (
    <div className="w-full">
  <header className="flex justify-between items-center w-full mx-auto py-4 px-4 sm:py-6 sm:px-8 lg:px-12">
    
    {/* Logo */}
    <NavLink to="/" className="flex-shrink-0">
      <img 
        src="../images/funiropic.svg" 
        alt="brand logo"  
        className="w-24 h-8 sm:w-28 sm:h-9 lg:w-[120px] lg:h-10" 
      />
    </NavLink>

    {/* Desktop Navigation */}
    <nav className="hidden md:block">
      <ul className="flex gap-8 lg:gap-10">
        {Links.map((link, index) => (
          <li key={index}>
            <NavLink 
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-[#B88E2F] font-semibold' 
                    : 'text-gray-700 hover:text-[#B88E2F]'
                }`
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    {/* Icons + Mobile Menu Button */}
    <div className="flex items-center gap-4 sm:gap-6">
      <NavIcons />
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 hover:text-[#B88E2F] transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Mobile Menu (when opened) */}
    {/* You would add state to toggle this */}
    {/* <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
      <ul className="flex flex-col items-center gap-4">
        {Links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </div> */}

  </header>
</div>
  )
}

export default Header
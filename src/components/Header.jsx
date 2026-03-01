import { NavLink } from "react-router-dom"
import NavIcons from "./NavIcons"
import { useState } from "react" // ADD THIS IMPORT

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // ADD STATE

    const Links = [
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

    // ADD TOGGLE FUNCTION
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="w-full relative z-9999"> {/* ADD relative HERE */}
            <header className="flex justify-between items-center w-full mx-auto py-4 px-4 sm:py-6 sm:px-8 lg:px-12 bg-white relative z-10"> {/* ADD bg-white and z-10 */}
                
                {/* Logo */}
                <NavLink to="/" className="shrink-0">
                    <img 
                        src="../images/funiropic.svg" 
                        alt="brand logo"  
                        className="w-24 h-8 sm:w-28 sm:h-9 lg:w-30 lg:h-10" 
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
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
                    
                    {/* Mobile Menu Button - ADD onClick HANDLER */}
                    <button 
                        className="lg:hidden text-gray-700 hover:text-[#B88E2F] transition-colors"
                        onClick={toggleMobileMenu} // ADD THIS
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - CONDITIONAL RENDERING */}
                {isMobileMenuOpen && ( // ADD CONDITIONAL RENDERING
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 z-50 border-t"> {/* CHANGED md:hidden to lg:hidden, ADDED z-50 and border-t */}
                        <ul className="flex flex-col items-center gap-4">
                            {Links.map((link, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)} // CLOSE MENU ON CLICK
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
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header
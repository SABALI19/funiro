import user from "../icons/user-icon.svg"
import cartIcon from "../icons/cart-icon.svg"
import search from "../icons/search-icon.svg"
import favorite from "../icons/favorite-icon.svg"
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavIcons() {

    const icons = [
        { icon: user, path: "/profile" },
        { icon: cartIcon, path: "/cart", isCart: true },
        { icon: favorite, path: "/favorites" },
        { icon: search, path: "/search" }
    ];

    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
       <div>
  {/* Desktop View */}
  <ul className="hidden sm:flex items-center gap-6 md:gap-8 lg:gap-10 relative">
    {icons.map((icon, index) => (
      <li key={index} className="relative">
        <NavLink to={icon.path}>
          <img src={icon.icon} alt={icon.name} className="w-5 md:w-6" />
        </NavLink>
        {icon.isCart && cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center border border-white">
            {cartCount > 99 ? '99+' : cartCount}
          </span>
        )}
      </li>
    ))}
  </ul>

  {/* Mobile Bottom Navigation */}
  <ul className="sm:hidden flex items-center justify-around bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 p-3 z-50">
    {icons.map((icon, index) => (
      <li key={index} className="relative">
        <NavLink 
          to={icon.path}
          className={({ isActive }) => 
            `p-2 rounded-lg transition-all ${isActive ? 'bg-gray-100' : ''}`
          }
        >
          <img src={icon.icon} alt={icon.name} className="w-6 h-6" />
        </NavLink>
        {icon.isCart && cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-3 h-3 flex items-center justify-center border border-white">
            {cartCount > 9 ? '9+' : cartCount}
          </span>
        )}
      </li>
    ))}
  </ul>
</div>
)
}

export default NavIcons;

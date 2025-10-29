import user from "../icons/user-icon .svg"
import cart from "../icons/cart-icon.svg"
import search from "../icons/search-icon.svg"
import favorite from "../icons/favorite-icon.svg"
import { NavLink } from "react-router-dom";

function NavIcons() {

    const icons = [
        {
            icon: user,
            path: "/profile"
        },
        {
            icon: cart,
            path: "/cart"
        },
        {
            icon: favorite,
            path: "/favorites"
        },
        {
            icon: search,
            path: "/search"
        }

    ];
  return (
    <div>
        <ul className="flex items-center gap-10">
            {icons.map((icon, index) => {
                return (
                    <li key={index}>
                        <NavLink to={icon.path}>
                            <img src={icon.icon} alt="Header icon" className="w-7" />
                        </NavLink>
                    </li>
                );
            } )}
        </ul>

    </div>
  );
}

export default NavIcons;
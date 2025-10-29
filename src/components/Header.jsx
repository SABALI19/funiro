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
    <div>
        <header className="flex justify-between items-center w-full mx-auto  py-3 px-15">
            <NavLink to="/">
            <img src="./images/funiropic.svg" alt="brand logo"  className="w-45" />
            </NavLink>

            <nav className="">
                <ul className="flex gap-10">
                    {Links.map((link, index)=> (
                        <li key={index}>
                            <NavLink to={link.path}>{link.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <NavIcons/>
        </header>
    </div>
  )
}

export default Header
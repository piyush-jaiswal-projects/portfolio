import { Logo, NavLink } from "../components";
import { navLink } from "../data";

function Navbar(props) {
    return (
        <div className="flex justify-between">
            <Logo />
            <div className="inline-flex items-center">
            {navLink.map((link) => {
                return <NavLink name={link} key={link + "key"} />
            })}
            </div>
        </div>
    )
}

export default Navbar;
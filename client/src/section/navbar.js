import { Logo, NavLink } from "../components";

const arr = ["HOME", "PROJECTS", "ABOUT", "BLOG", "EXPERIENCE", "RESUME"]

function Navbar(props) {
    return (
        <div className="flex justify-between">
            <Logo />
            <div className="inline-flex items-center">
            {arr.map((link) => {
                return <NavLink name={link} key={link + "key"} />
            })}
            </div>
        </div>
    )
}

export default Navbar;
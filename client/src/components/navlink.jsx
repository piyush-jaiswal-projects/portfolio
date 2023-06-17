
function Navlink(props) {
    var link;
    switch (props.name) {
        case "HOME":
            link="/"
            break;
        case "PROJECTS":
            link="/projects"
            break;
        case "ABOUT":
            link = "/about"
            break;
        case "BLOG":
            link = "/blog"
            break;
        case "EXPERIENCE":
            link = "/experience"
            break;
        case "RESUME":
            link = "/resume"
            break;
        default:
            link = "/random"
            break;
    }
    return (
        <div className="hover:animate-bounce inline-flex flex-col items-center text-lightblue mx-2">
            <a className="block" href={link} id={props.name.toLowerCase() + "navlink"}>{props.name}</a>
            {window.location.pathname === link ? <NavlinkCircle /> : ""}
        </div>
    )
}

function NavlinkCircle() {
    return (
        <div className="bg-lightblue p-[3px] w-[3px] rounded-full" />
    )
}

export default Navlink;
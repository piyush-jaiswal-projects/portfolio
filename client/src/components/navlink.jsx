
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
            link = "https://dev.to/piyushjaiswal1610"
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
        <div className=" inline-flex flex-col items-center mx-2 md:mx-4">
            <a className={props.theme === "light" ? "block text-white" : "block text-darkblue"} href={link} id={props.name.toLowerCase() + "navlink"}>{props.name}</a>
            {window.location.pathname === link ? <NavlinkCircle /> : ""}
        </div>
    )
}

function NavlinkCircle() {
    return (
            <div className="animate-underline bg-lightblue p-[0px] w-[0px]" />
        
    )
}

export default Navlink;
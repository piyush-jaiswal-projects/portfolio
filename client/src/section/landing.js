import Navbar from "./navbar";

function Landing(props) {
    return (
        <div className= "bg-[url('./assets/denim.png')]">
            {/* background in div */}
            <Navbar />
            {props.children}
        </div>
    )
}

export default Landing;
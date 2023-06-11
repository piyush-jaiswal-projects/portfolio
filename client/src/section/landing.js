import Navbar from "./navbar";
import { HeroTemplate, HomeHero } from "../components";

function Landing() {
    return (
        <div className= "bg-[url('./assets/denim.png')] mix-blend-color-dodge">
            <Navbar />
            {window.location.pathname === "/" ? <HomeHero /> : <HeroTemplate type="page"/>}
        </div>
    )
}

export default Landing;
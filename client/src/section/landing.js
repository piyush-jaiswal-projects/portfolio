import { HeroTemplate, HomeHero } from "../components";

function Landing() {
    return (
        <div className= "bg-[url('./assets/denim.png')] mix-blend-color-dodge">
            {window.location.pathname === "/" ? <HomeHero /> : <HeroTemplate type="page"/>}
        </div>
    )
}

export default Landing;
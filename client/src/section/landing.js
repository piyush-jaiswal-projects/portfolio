import { HeroTemplate, HomeHero } from "../components";

function Landing(props) {
    return (
        <div className= "bg-[url('./assets/denim.png')] mix-blend-color-dodge">
            {window.location.pathname === "/" ? <HomeHero /> : <HeroTemplate type={props.type} title={props.title} desc={props.desc} />}
        </div>
    )
}

export default Landing;
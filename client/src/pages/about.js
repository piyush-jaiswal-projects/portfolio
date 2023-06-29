import {
    Landing,
    Connect,
    Story,
    Introduction,
    TechCarousel,
    CertCarousel,
} from "../section";

function About() {
    return (
        <>
            <Landing type="page" />
            <div className="bg-darkblue">
            {/* <Introduction /> */}
            <TechCarousel />
            <Story />
            <CertCarousel />
            <Connect />   
            </div> 
        </>
    )
}

export default About;
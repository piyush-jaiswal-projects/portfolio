import { Landing, Connect, FeedbackForm, Story, Introduction, TechCarousel, CertCarousel } from "../section";

function About() {
    return (
        <>
            <Landing type="page" />
            <Introduction />
            <TechCarousel />
            <CertCarousel />
            <Story />
            <FeedbackForm title="Wanna say something?" desc="" />
            <Connect />    
        </>
    )
}

export default About;
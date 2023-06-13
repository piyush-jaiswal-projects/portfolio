import { Landing, Connect, FeedbackForm, Story, Introduction, TechCarousel } from "../section";

function About() {
    return (
        <>
            <Landing type="page" />
            <Introduction />
            <TechCarousel />
            <Story />
            <FeedbackForm title="Wanna say something?" desc="" />
            <Connect />    
        </>
    )
}

export default About;
import { Landing, Connect, FeedbackForm, Story, Introduction } from "../section";

function About() {
    return (
        <>
            <Landing type="page" />
            <Introduction />
            <Story />
            <FeedbackForm title="Wanna say something?" desc="" />
            <Connect />    
        </>
    )
}

export default About;
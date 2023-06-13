import { Landing, Connect, FeedbackForm, Story } from "../section";

function About() {
    return (
        <>
            <Landing type="page" />
            <Story />
            <FeedbackForm title="Wanna say something?" desc="" />
            <Connect />    
        </>
    )
}

export default About;
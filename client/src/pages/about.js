import {
    Landing,
    Connect,
    FeedbackForm,
    Story,
    Introduction,
    TechCarousel,
    CertCarousel,
    StudyNotes
} from "../section";

function About() {
    return (
        <>
            <Landing type="page" />
            <Introduction />
            <TechCarousel />
            <Story />
            <CertCarousel />
            <StudyNotes />
            <FeedbackForm title="Wanna say something?" desc="" id="Message"/>
            <Connect />    
        </>
    )
}

export default About;
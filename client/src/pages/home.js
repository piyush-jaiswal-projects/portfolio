import {Landing,  AboutMe, Connect, FeedbackForm, TechCarousel
} from '../section'

function Home() {
    return (
        <>
            <Landing type="page" /> 
            <AboutMe />
            <FeedbackForm title="Send Me a Mail" desc="" id="Message"/>
            <Connect />
        </>
    );
}

export default Home;
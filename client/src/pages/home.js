import {Landing, Projects, AboutMe, Connect
} from '../section'

function Home() {
    return (
        <>
            <Landing type="page"/> 
            <Projects />
            <AboutMe />
            <Connect />
        </>
    );
}

export default Home;
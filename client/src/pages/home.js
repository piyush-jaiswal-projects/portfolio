import { AboutMe, BlogBody, Connect, ExperienceSec, Navbar, ProjectGrid } from '../section';
import { HomeHero } from '../components';

function Home() {
    
    return (
        <>
            <div id="HOME" className='h-[65vh] sm:h-[100vh]'><HomeHero /></div>
            <div id="Navbar" className=''><Navbar /></div>
            <div id="ABOUT" className='h-[90vh]'><AboutMe /></div>
            <div id="PROJECTS" className='h-[90vh] mb-[100px]'><ProjectGrid /></div>
            <div id="BLOG" className='h-[90vh]'><BlogBody /></div>
            <div id="EXPERIENCE" className='h-[90vh]'><ExperienceSec /></div>
            <div id="CONTACT" className='h-[90vh]'><Connect /></div>
        </>
    );
}

export default Home;
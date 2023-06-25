import { AboutMe, BlogBody, Connect, ExperienceSec, Navbar, ProjectGrid } from '../section';
import { HomeHero } from '../components';

function Home() {
    
    return (
        <>
            <div id="HOME" className='h-[65vh] sm:h-[100vh]'><HomeHero /></div>
            <div id="Navbar" className=''><Navbar /></div>
            <div id="ABOUT" className='overflow-hidden my-2'><AboutMe /></div>
            <div id="PROJECTS" className='h-[90vh] mb-[100px]'><ProjectGrid /></div>
            <div id="BLOG" className='h-[90vh] overflow-hidden'><BlogBody /></div>
            <div id="EXPERIENCE" className=''><ExperienceSec /></div>
            <div id="CONTACT" className=''><Connect /></div>
        </>
    );
}

export default Home;
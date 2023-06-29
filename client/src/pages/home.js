import { AboutMe, BlogBody, CertCarousel, Connect, ExperienceSec, Navbar, ProjectGrid } from '../section';
import { HomeHero } from '../components';
import $ from 'jquery'

function Home() {


    $("#Navbar:in-viewport").toggleClass("fixed");

    // $("#Navbar").on('inview', function (event, isInView) {
    //     if (isInView) {
    //         alert("Navbar in view")
    //     }
    //     else {
    //         alert("Home in view")
    //     $("#Navbar").toggleClass("fixed")
    //     }
    // })

    // $("#HOME").on('inview', function () {
    //     alert("Home in view")
    //     $("#Navbar").toggleClass("fixed")
    // })
    
    return (
        <div id="home">
            <div id="HOME" className='h-[90vh] sm:h-[100vh]'><HomeHero /></div>
            <div id="Navbar" className='top-0'><Navbar /></div>
            <div id="ABOUT" className='overflow-hidden my-10'><AboutMe /></div>
            <div id="PROJECTS" className='lg:mb-[50px]'><ProjectGrid slice={5} /></div>
            <div id="BLOG" className=''><BlogBody /></div>
            <div id="EXPERIENCE" className=''><ExperienceSec /></div>
            <div><CertCarousel /></div>
            <div id="CONTACT" className=''><Connect /></div>
        </div>
    );
}

export default Home;
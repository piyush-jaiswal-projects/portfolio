import $ from 'jquery'
import { useState } from 'react';

import { MenuIcon, CloseIcon } from "../components";
import { useWindowWidth } from '../hooks'
import { ScrollToDiv } from '../functions';

function Navbar(props) {
    return (
        <div className="flex bg-[#1a1a1a] items-center w-[100vw] border-darkblueThree border-b-4 md:h-auto justify-between">
            {useWindowWidth() >= 768 ? <LargeNavbar function={props.function} /> : <SmallNavbar function={props.function} />}
        </div>
    )
}

function LargeNavbar(props) {
    return (
        <div className="flex text-white items-center justify-around h-[50px] w-[50vw] p-0">
            <button onClick={() =>ScrollToDiv("HOME")} className='hover:bg-darkblueThree custom-btn hover:text-darkblue h-[50px] w-[150px] hover:font-bold'>HOME</button>
                <button onClick={() =>ScrollToDiv("ABOUT")} className='hover:bg-darkblueThree custom-btn hover:text-darkblue h-[50px] w-[150px] hover:font-bold'>ABOUT</button>
                <button onClick={() =>ScrollToDiv("PROJECTS")} className='hover:bg-darkblueThree custom-btn hover:text-darkblue h-[50px] w-[150px] hover:font-bold'>PROJECTS</button>
                <button onClick={() =>ScrollToDiv("BLOG")} className='hover:bg-darkblueThree custom-btn hover:text-darkblue h-[50px] w-[150px] hover:font-bold'>BLOG</button>
                <button onClick={() =>ScrollToDiv("EXPERIENCE")} className='hover:bg-darkblueThree custom-btn hover:text-darkblue h-[50px] w-[150px] hover:font-bold'>EXPERIENCE</button>
                <button onClick={() =>ScrollToDiv("CONTACT")} className='hover:bg-darkblueThree custom-btn hover:text-darkblue h-[50px] w-[150px] hover:font-bold'>CONTACT</button>
        </div>
    )
}

function Menu() {
    return (
        <div id="menu" className="animate-width text-white rounded-lg small-menu animate-custom-menu text-center shadow fixed z-[10] top-[10%] left-[0] border border-solid border-lightblue mx-auto items-center hidden">
            
                    <div className='px-[5px] py-[2px] text-left text-white inline-flex items-center flex-wrap'>
                    <button onClick={() =>ScrollToDiv("HOME")} className='mx-1'>HOME</button>
                <button onClick={() =>ScrollToDiv("ABOUT")} className='mx-1'>ABOUT</button>
                <button onClick={() =>ScrollToDiv("PROJECTS")} className='mx-1'>PROJECTS</button>
                <button onClick={() =>ScrollToDiv("BLOG")} className='mx-1'>BLOG</button>
                <button onClick={() =>ScrollToDiv("EXPERIENCE")} className='mx-1'>EXPERIENCE</button>
                <button onClick={() =>ScrollToDiv("CONTACT")} className='mx-1'>CONTACT</button>
                    </div>
        </div>
    )
}

function SmallNavbar() {
    const [icon, setIcon] = useState(<MenuIcon />);
    const [state, setState] = useState("menu");

    function toggleIcon() {
        if (state === "menu") {
            $("#menu").removeClass("hidden");
            setIcon(() => <CloseIcon />);
            setState(() => "close")
        }
        else {
            $("#menu").addClass("hidden");
            setIcon(() => <MenuIcon />);
            setState(() => "menu")
        }
    }

    return (
        <>
        <div onClick={toggleIcon} id="small" className=''>
            {icon}
            <Menu />
        </div>
        </>
    )
}

export default Navbar;
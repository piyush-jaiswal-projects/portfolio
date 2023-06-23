import $ from 'jquery'
import { useState } from 'react';

import { Logo, NavLink, MenuIcon, CloseIcon } from "../components";
import { navLink } from "../data";
import { useWindowWidth } from '../hooks'
import { ScrollToDiv } from '../functions';

function Navbar(props) {
    return (
        <div className="flex bg-[#1a1a1a] py-5 w-[100vw] border-darkblueThree border-b-4 md:h-auto justify-between">
            {useWindowWidth() >= 768 ? <LargeNavbar function={props.function} /> : <SmallNavbar function={props.function} />}
        </div>
    )
}

function LargeNavbar(props) {
    return (
        <div className="flex text-white items-center justify-around w-[50vw]">
            <button onClick={() =>ScrollToDiv("HOME")} className=''>HOME</button>
                <button onClick={() =>ScrollToDiv("ABOUT")} className=''>ABOUT</button>
                <button onClick={() =>ScrollToDiv("PROJECTS")} className=''>PROJECTS</button>
                <button onClick={() =>ScrollToDiv("BLOG")} className=''>BLOG</button>
                <button onClick={() =>ScrollToDiv("EXPERIENCE")} className=''>EXPERIENCE</button>
                <button onClick={() =>ScrollToDiv("CONTACT")} className=''>CONTACT</button>
        </div>
    )
}

function Menu() {
    return (
        <div id="menu" className="animate-width text-white rounded-lg small-menu animate-custom-menu text-center shadow fixed z-[10] top-[10%] left-[0] border border-solid border-lightblue mx-auto items-center hidden">
            
                    <div className='px-[5px] py-[2px] text-left text-white inline-flex items-center'>
                    <button onClick={() =>ScrollToDiv("HOME")} className=''>HOME</button>
                <button onClick={() =>ScrollToDiv("ABOUT")} className=''>ABOUT</button>
                <button onClick={() =>ScrollToDiv("PROJECTS")} className=''>PROJECTS</button>
                <button onClick={() =>ScrollToDiv("BLOG")} className=''>BLOG</button>
                <button onClick={() =>ScrollToDiv("EXPERIENCE")} className=''>EXPERIENCE</button>
                <button onClick={() =>ScrollToDiv("CONTACT")} className=''>CONTACT</button>
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
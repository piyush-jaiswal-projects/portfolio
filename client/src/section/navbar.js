import $ from 'jquery'
import { useState } from 'react';

import { Logo, NavLink, MenuIcon, CloseIcon } from "../components";
import { navLink } from "../data";
import { useWindowWidth } from '../hooks'

function Navbar(props) {
    return (
        <div className="flex justify-between">
            <Logo />
            {useWindowWidth() >= 768 ? <LargeNavbar /> : <SmallNavbar />}
        </div>
    )
}

function LargeNavbar() {
    return (
        <div className="inline-flex items-center">
            {navLink.map((link) => {
                return <NavLink name={link} key={link + "key"} />
            })}
        </div>
    )
}

function Menu() {
    return (
        <div id="menu" className="animate-custom-menu text-center bg-darkblue shadow fixed top-[10%] right-[5%] z-10 border border-solid border-lightblue items-center hidden">
            {navLink.map((link) => {
                return <div className='m-[1.5rem] sm:m-[1rem]' key={link + "key"}><NavLink name={link} /></div>
            })}
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
            setState(()=>"close")
        }
        else {
            $("#menu").addClass("hidden");
            setIcon(() => <MenuIcon />);
            setState(()=>"menu")
        }
    }

    return (
        <>
        <div onClick={toggleIcon}>
            {icon}
        </div>
            <Menu />
        </>
    )
}

export default Navbar;
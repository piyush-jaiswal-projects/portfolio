import $ from 'jquery'
import { useState } from 'react';

import { Logo, NavLink, MenuIcon, CloseIcon } from "../components";
import { navLink } from "../data";
import { useWindowWidth } from '../hooks'

function Navbar(props) {
    return (
        <div className="flex h-[140px] md:h-auto justify-between ">
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
        <div id="menu" className="animate-width rounded-lg small-menu animate-custom-menu text-center shadow fixed z-[10] top-[10%] left-[0] border border-solid border-lightblue mx-auto items-center hidden">
            {navLink.map((link) => {
                return (
                    <>
                    <div className='px-[5px] py-[2px] text-left inline-flex items-center' key={link + "key"}>
                    <NavLink name={link} />
                    </div>
                    </>
                )
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
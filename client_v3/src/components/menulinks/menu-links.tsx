import React from 'react'

export default function MenuLinks() {
    return (
        <div className='flex flex-col justify-center items-center gap-1 my-[20px]'>
            <button className='tracking-widest'>About</button>
            <button className='tracking-widest'>Skills</button>
            <button className='tracking-widest'>Projects</button>
            <button className='tracking-widest'>Experience</button>
            <button className='tracking-widest'>Education</button>
            <button className='tracking-widest'>Blogs</button>
            <button className='tracking-widest'>Hire me</button>
            <button className='tracking-widest'>Contact</button>
        </div>
    )
}
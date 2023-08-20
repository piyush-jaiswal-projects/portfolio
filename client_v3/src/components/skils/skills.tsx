import React from 'react'
import SkillSlider from './slider'

export default function Skills() {
    return (
        <div className='my-[50px]'>
            <h1 className='text-[2rem]'>Skills</h1>
            <section className='w-[100%] my-[20px] flex justify-start items-center flex-wrap'>
                <SkillSlider length={90} color='yellow' label="Javascript, Typescript" />
                <SkillSlider length={80} color='blue' label='HTML, CSS, Tailwind CSS' />
                <SkillSlider length={95} color='skyblue' label="React.js, Next.js" />
                <SkillSlider length={50} color='green' label='React Native' />
                <SkillSlider length={85} color='red' label="Node.js, ExpressJS" />
                <SkillSlider length={80} color='' label='MongoDB' />
                <SkillSlider length={80} color='' label='Git, Github, Docker, AWS' />
            </section>
        </div>
    )
}

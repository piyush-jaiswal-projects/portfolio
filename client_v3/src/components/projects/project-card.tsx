import React from 'react'

export default function ProjectCard(props: {
    data: any
}) {
    return (
        <div className='card-shadow translate-up override-theme bg-secondary w-[280px] 
        h-[250px] p-2 text-left'>
            <h1 className='text-[1.2rem] font-semibold my-[5px]'>{props.data.title}</h1>
            <p className='leading-tight'>{props.data.tagline}</p>
            <section className='flex justify-start items-center flex-wrap my-[10px]'>
            {props.data.tech.map((item: string, index: number) => {
                return (
                    <p className='mx-1 my-0 text-[0.8rem]' key={index}>
                        {item}
                    </p>
                )
            })}
            </section>
        </div>
    )
}
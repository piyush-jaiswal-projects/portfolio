import { LargeButton, ProjectCard, Heading, TextPara } from "../components"

function Section1() {
    return (
        <div className="mx-auto md:flex flex-col md:w-[50vw] md:mt-[4vw]">
            <TextPara align="left">
            Hi, I am a software developer based out of India.
            I specialize in developing robust and scalable web application and websites.
            </TextPara>
                    
            <div className="flex md:block items-center sm:my-[3vw] md:my-[-0.2vw]">
                <LargeButton text="View All Projects ->" actionType="redirect" url="/projects"/>
            </div>
        </div>
        
    )
}

function Section2() {
    return (
        <div className="flex justify-around mx-auto md:w-[50vw]">
            <ProjectCard id={1} />
        </div>
        
    )
}

export default function Projects() {
    return (
        <div className="w-[90vw] mx-auto">
            <Heading text="Projects" />

            <div className="block md:flex mx-auto w-[90vw]">
                <Section1 />
                <Section2 />
            </div>
        </div>
    )
}
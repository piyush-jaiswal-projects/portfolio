import { LargeButton, ProjectCard } from "../components"

function Section1() {
    return (
        <div className="mx-auto md:flex flex-col md:w-[50vw] md:mt-[4vw]">
                    <div className="">
                    <p className="text-dullblue text-center md:text-left text-[5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.8vw] leading-tight my-[3vw] sm:my-[2vw]">
                        Hi, I am a software developer based out of India.
                        I specialize in developing robust and scalable web application and websites.
                    </p>
                    </div>
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
        <div>
            <div>
                <h1 className="text-lightblue font-bold text-[8vw] sm:text-[6vw] md:text-[3.5vw] lg:text-[2.5vw] text-center my-[1rem] md:my-[1.5rem]">Projects</h1>
            </div>

            <div className="block md:flex mx-auto w-[90vw]">
                <Section1 />
                <Section2 />
            </div>
        </div>
    )
}
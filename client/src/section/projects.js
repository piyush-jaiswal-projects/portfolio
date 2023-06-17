import { LargeButton, Heading, TextPara } from "../components"

function Section1() {
    return (
        <div className="mx-auto md:inline-flex flex-col md:w-[40vw]">
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
        <div className="bg-[green] flex justify-around mx-auto md:w-[40vw]">
            
            
        </div>
        
    )
}

export default function Projects() {
    return (
        <div className="w-[80vw] mx-auto bg-[red] ">
            <Heading text="Projects" />

            <div className="block md:flex md:justify-center mx-auto w-[80vw]">
                <Section1 />
                <Section2 />
            </div>
        </div>
    )
}
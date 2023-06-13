import { git, link, rightArrow } from "../assets"
import { projects } from "../data"
import CircularLink from "./circular-link";

export default function ProjectCard(props) {

    const project = projects.filter(project => project.id === props.id)[0];

    return (
        <div key={props.id} className="bg-lightblue w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] mx-auto md:mx-4 lg:mx-6 my-4 sm:my-6 md:my-0 rounded-md">
            <div className="h-[50vw] sm:h-[40vw] md:h-[23vw] lg:h-[15vw] overflow-y-hidden">
                <img src={project.previewImage} alt={project.title} className="rounded-t-md p-0 mx-auto h-[45vw] sm:h-[40vw] md:h-[23vw] lg:h-[15vw] w-[100%]" />
            </div>

            <div>

                <div className="mx-5 my-2 sm:my-[4] md:my-[6]">
                    <h3 className="text-darkblue font-bold text-[6vw] sm:text-[5.5vw] md:text-[3vw] lg:text-[2vw] text-center leading-tight">{project.title}</h3>
                </div>

                <div className="flex items-center justify-center mx-auto mb-4">
                    <CircularLink name="Git" image={git} link={project.git} />
                    <CircularLink name="Live Link" image={link} link={project.live} />
                    <CircularLink name="->" image={rightArrow} link={"/projects/" + project.id} />
                </div>

            </div>
        </div>
    )
}
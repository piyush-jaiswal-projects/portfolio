import CircularLink from "./circular-link"
import { git, link, rightArrow } from "../assets"

export default function SmallCard(props) {
    return (
        <div key={props.id} className="w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] h-[70vw] sm:h-[60vw] md:h-[35vw] lg:h-[20vw] bg-lightblue shadow-lg mx-auto border border-lightblue rounded-md my-2 md:my-4">
            
            <div className="bg-lightblue h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw] rounded-md">
                <img className="rounded-md" src={props.image} alt={props.title} />
            </div>

            <div className="bg-darkblue flex items-center justify-between rounded-b-md h-[19.5vw] sm:h-[14.5vw] md:h-[9.7vw] lg:h-[4.8vw] px-3 md:py-5">
                
                <div className="flex items-center justify-center">
                    <CircularLink name="git" image={git} link={props.git} theme="dark"/>
                    <CircularLink name="live" image={link} link={props.live} theme="dark"/>
                </div>

                <div className="px-3">
                 <a href={"/projects/" + props.id} rel="noreferrer" target="_blank" >
                 <img className="m-0 p-0 w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[2vw] invert-[0.75]" src={rightArrow} alt={props.name} />
                </a>
                </div>

            </div>
        </div>
    )
}
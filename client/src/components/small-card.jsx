import CircularLink from "./circular-link"
import { git, link, rightArrow } from "../assets"

export default function SmallCard(props) {
    return (
        <div key={props.item.id} className="popup w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw] bg-lightblue shadow-lg mx-auto border border-lightblue rounded-md my-3 md:my-4">
            <a href={"/projects/" + props.item.id} >
            <div className="bg-lightblue h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw] rounded-md">
                <img className="rounded-md w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw]" src={props.item.previewImage} alt={props.item.title} />
            </div>
            </a>

            {/* <div className="bg-darkblue flex items-center justify-between rounded-b-md h-[19.5vw] sm:h-[14.5vw] md:h-[9.7vw] lg:h-[4.8vw] px-3 md:py-5">
                
                <div className="flex items-center justify-center">
                    <CircularLink name="git" image={git} link={props.item.git} theme="dark"/>
                    {props.item.live === "none" || "" ? "" : <CircularLink name="live" image={link} link={props.item.live} theme="dark"/>}
                </div>

                <div className="px-3">
                 <a href={"/projects/" + props.item.id} >
                 <img className="m-0 p-0 w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[2vw] invert-[0.75]" src={rightArrow} alt={props.item.name} />
                </a>
                </div>

            </div> */}
        </div>
    )
}
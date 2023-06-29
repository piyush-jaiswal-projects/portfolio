import { useContext } from "react";
import SmallCard from './small-card';
import { Data } from "../section/project-grid";

export default function Grid(props) {
    const data = useContext(Data);

    return (
        <div className="w-[90vw] lg:w-[80vw] mx-auto p-5 gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.Projects.map((project) => {
                return <SmallCard item={project} />
            })}
            <a href="/projects" rel="noreferrer" target="_blank">
            {props.type === "page" ? "" : <div className="popup flex justify-center items-center w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw] bg-lightblue shadow-xl mx-auto rounded-md my-3 md:my-2">
            <label className="text-white cursor-pointer">See all projects</label>
            </div>}
            </a>
        </div>
    )
}
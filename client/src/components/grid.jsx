import { useContext } from "react";
import SmallCard from './small-card';
import { Data } from "../section/project-grid";

export default function Grid() {
    const data = useContext(Data);

    return (
        <div className="w-[90vw] mx-auto p-5 flex items-center flex-wrap flex-start">
            {data.Projects.map((project) => {
                return <SmallCard item={project} />
            })}
        </div>
    )
}
import { useContext } from "react";
import SmallCard from './small-card';
import { Data } from "../section/project-grid";

export default function Grid() {
    const data = useContext(Data);

    return (
        <div className="w-[90vw] mx-auto p-5 gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0">
            {data.Projects.map((project) => {
                return <SmallCard item={project} />
            })}
        </div>
    )
}
import { useContext } from "react";
import { Data } from "../section/project-grid";
import { projects } from "../data";

export default function Tab() {
    const buttons = ["All", "Frontend", "Backend", "Fullstack", "DSA", "Others"];
    const data = useContext(Data);

    function changeCategory(category) {
        if (category === "All") {
            data.setProjects(() => projects);
        }
        else {
            const newData = projects.filter((project) => project.tag === category);
            data.setProjects(() => newData);
        }
    }

    return (
        <div className="text-center border-t border-b border-lightblue flex items-center justify-around flex-wrap flex-row w-[90vw] mx-auto">
            {buttons.map((button) => {
                return <TabButton text={button} function={() => changeCategory(button)} />
            })}
        </div>
    )
}


function TabButton(props) {
    return (
        <button onClick={props.function} className=" w-[12vw] inline-flex cursor-pointer py-[10px] text-lightblue text-[3vw] md:text-[2.2vw] lg:text-[1.5vw]">
            {props.text}
        </button>
    )
}
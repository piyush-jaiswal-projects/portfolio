import { useContext } from "react";
import { Data } from "../section/project-grid";
import { projects } from "../data";
import $ from 'jquery'

export default function Tab() {
    const buttons = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK"];
    const data = useContext(Data);

    function changeCategory(category) {
        if (category === "ALL") {
            data.setProjects(() => projects);
        }
        else {
            const newData = projects.filter((project) => project.tag === category);
            data.setProjects(() => newData);
        }

        const parent = document.getElementById("parent")
        const children = parent.children;
        for (var i = 0; i < children.length; i++) {
            children[i].classList.remove("bg-darkblueTwo");
            children[i].classList.remove("text-darkblue");
          }
        $("#" + category).toggleClass("bg-darkblueTwo")
        $("#" + category).toggleClass("text-darkblue")
    }

    return (
        <div id="parent" className="text-center flex items-center justify-around flex-wrap flex-row w-[90vw] md:w-[50vw] mx-auto">
            {buttons.map((button) => {
                return <TabButton text={button} function={() => changeCategory(button)} />
            })}
        </div>
    )
}


function TabButton(props) {
    return (
        <button id={props.text} onClick={props.function} className=" w-[12vw] inline-flex justify-center cursor-pointer py-[10px] text-[4vw] md:text-[2.2vw] lg:text-[1.5vw]">
            {props.text}
        </button>
    )
}
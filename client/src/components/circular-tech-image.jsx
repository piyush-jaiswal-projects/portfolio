import { HTML, CSS, Javascript, ReactJS, Node, Docker, close } from "../assets"
import Label from "./label";

export default function CircularImage(props) {
    var img;
    switch (props.name) {
            case "HTML":
                img = HTML;
            break;
            case "CSS":
                img = CSS;
            break;
            case "Javascript":
                img = Javascript;
            break;
            case "ReactJS":
                img = ReactJS;
            break;
            case "Node":
                img = Node;
            break;
            case "Docker":
                img = Docker;
                break;
        default:
            img = close;
            break;
    }

    return (
        <>
            <div className="w-[55px] h-[55px] rounded-full inline-flex justify-around items-center mx-[5px] bg-lightblue">
              <img className=" w-[40px] h-[40px]" src={img} alt={props.name} />
            </div>
            {props.label === "none" ? "" :<><br /> <Label text={props.name} /></>}
        </>
    )
}
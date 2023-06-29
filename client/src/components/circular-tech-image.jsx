import { HTML, CSS, Javascript, ReactJS, Node, Docker, close } from "../assets"
import Label from "./label";

export default function CircularImage(props) {
    var img;
    switch (props.name) {
            case "HTML":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687527746/aoxboqagumti9rzthlpj.svg";
            break;
            case "CSS":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687527786/tprxy413ejwsoahbtfmy.svg";
            break;
            case "Javascript":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687527804/tbadz0dmlm3oc7vubzsk.svg";
            break;
            case "ReactJS":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687527821/aq9juiw1vwokrlnucnsu.svg";
            break;
            case "Node":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687527839/ijpk6mrg9n0dwjckfvts.svg";
            break;
            case "Docker":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687527854/zoyfy82to0sm5kjbb0z9.svg";
            break;
            case "TailwindCSS":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687527974/uc053cfkur9csctjfz4f.png";
            break;
            case "jQuery":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687528121/tprbfqro4oz8zw0suszw.png";
            break;
            case "ExpressJS":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687528170/gcsdwkjwgmnflb70i7aq.png";
            break;
            case "MongoDB":
                img = "http://res.cloudinary.com/deo80u7qs/image/upload/v1687528204/ytpp5j6ofcoxjueftozi.png";
                break;
        default:
            img = close;
            break;
    }

    return (
        <>
            <div className="shadow w-[55px] h-[55px] rounded-full inline-flex justify-around items-center mx-[5px] bg-white overflow-hidden">
              <img className=" w-[40px] h-[40px]" src={img} alt={props.name} />
            </div>
            {props.label === "none" ? "" :<><br /> <Label text={props.name} /></>}
        </>
    )
}
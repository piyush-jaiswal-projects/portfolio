import { Project1 } from "../assets"

export default function CertCard(props) {
    var images;
    switch (props.name) {
        case "Project1":
            images = Project1
            break;
        default:
            break;
    }

    return (
        <div key={props.id} className="w-[25vw]">
            <img className="object-cover" src={images} alt={props.id} />
        </div>
    )
}
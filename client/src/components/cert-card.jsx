import { Project1 } from "../assets"

export default function CertCard(props) {
    var images;
    switch (props.title) {
        case "Project1":
            images = Project1
            break;
        default:
            images = Project1
            break;
    }

    return (
        <div key={props.id} className="cursor-pointer w-[25vw]" onClick={()=>{window.location.href ="/certificates/"+props.id}}>
            <img className="object-cover" src={images} alt={props.id} />
        </div>
    )
}
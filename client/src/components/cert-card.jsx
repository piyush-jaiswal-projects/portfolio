import { Project1 } from "../assets"

export default function CertCard(props) {

    return (
        <div key={props.id} className="popup transition inflate rounded-lg cursor-pointer w-[25vw]">
            <img className="rounded-lg object-cover" src={props.url} alt={props.id} />
        </div>
    )
}
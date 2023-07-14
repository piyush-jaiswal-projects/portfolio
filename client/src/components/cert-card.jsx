import { useWindowWidth } from "../hooks";

export default function CertCard(props) {

    return (
        <div 
        key={props.id} 
            className={useWindowWidth() >= 600 ? "smooth-card popup transition inflate rounded-lg w-[25vw]" : "smooth-card popup transition inflate mx-auto rounded-lg w-[90vw]"}
        >
            <img className="rounded-lg object-cover" src={props.link} alt={props.id} />
        </div>
    )
}
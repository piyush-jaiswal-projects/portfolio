
export default function CertCard(props) {

    return (
        <div key={props.id} className="smooth-card popup transition inflate rounded-lg w-[25vw]">
            <img className="rounded-lg object-cover" src={props.link} alt={props.id} />
        </div>
    )
}
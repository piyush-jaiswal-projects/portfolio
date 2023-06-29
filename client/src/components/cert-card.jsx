
export default function CertCard(props) {

    return (
        <div key={props.id} className="smooth-card popup transition inflate rounded-lg cursor-pointer w-[25vw]" onClick={()=>{window.location.href ="/certificates/"+props.id}}>
            <img className="rounded-lg object-cover" src={props.link} alt={props.id} />
        </div>
    )
}
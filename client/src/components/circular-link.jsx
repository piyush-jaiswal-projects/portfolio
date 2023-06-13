export default function CircularLink(props) {
    return (
            <div className="cursor-pointer inline-flex items-center justify-center rounded-full bg-darkblue w-[12.5vw] sm:w-[10vw] md:w-[6vw] lg:w-[4vw] h-[12.5vw] sm:h-[10vw] md:h-[6vw] lg:h-[4vw] mx-[1vw] md:mx-[0.5vw] my-[2vw] md:my-[1vw] lg:my-[0.7vw]">
                
                <a href={props.link} rel="noreferrer" target="_blank" >
                 <img className="m-0 p-0 w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[2vw] invert-[.75]" src={props.image} alt={props.name} />
                </a>
            </div>

    )
}
export default function CircularLink(props) {
    const divClass = `cursor-pointer hover:animate-spin inline-flex items-center justify-center rounded-full w-[12.5vw] sm:w-[10vw] md:w-[6vw] lg:w-[4vw] h-[12.5vw] sm:h-[10vw] md:h-[6vw] lg:h-[4vw] mx-[1vw] md:mx-[0.5vw] my-[2vw] md:my-[1vw] lg:my-[0.7vw] ${props.theme === "dark" ? "border border-solid border-lightblue bg-lightblue" : "bg-darkblue"}`;
    const imgClass = `m-0 p-0 w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[2vw] ${props.theme === "dark" ? "" : "invert-[0.75]"}`

    return (
            <div className={divClass}>
                <a href={props.link} rel="noreferrer" target="_blank" >
                 <img className={imgClass} src={props.image} alt={props.name} />
                </a>
            </div>

    )
}
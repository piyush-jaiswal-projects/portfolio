export default function Heading(props) {
    return (
        <div>
            <h1 className="hover:animate-bounce text-lightblue font-bold text-[8vw] sm:text-[6vw] md:text-[3.5vw] lg:text-[2.5vw] text-center my-[1rem] md:my-[1.5rem]">{props.text}</h1>
            </div>
    )
}
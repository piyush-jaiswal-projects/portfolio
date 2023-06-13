export default function TextPara(props) {
    return (
        <div className={"text-" + props.align}>
            <p className="text-dullblue text-center md:text-left text-[5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.8vw] leading-tight my-[3vw] sm:my-[2vw]">
                {props.children}
            </p>
            
        </div>
    )
}
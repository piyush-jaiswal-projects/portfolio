function LargeButton(props) {
    //function execute - function
    // redirect - url
    function handleClick() {
        props.actionType === "redirect"
            ?
            window.location.replace(props.url || window.location.pathname)
            :
            props.function();
    }

    return (
        <button className="cursor-pointer w-[80vw] md:w-[30vw] lg:w-[25vw] m-auto md:m-none hover:bg-lightblue hover:text-darkblue bg-darkblue mix-blend-normal text-lightblue border border-solid rounded-[5px] border-lightblue p-[10px] text-[1.1rem]"
            onClick={handleClick}>
            {props.text}
        </button>
    )
}

export default LargeButton;
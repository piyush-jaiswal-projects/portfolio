function Button(props) {
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
        <button className="cursor-pointer w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] my-1 mx-2 hover:bg-white hover:text-darkblue bg-darkblue mix-blend-normal text-white border border-solid bolder-[2px] rounded-[5px] border-white p-[10px] text text-[1.1rem]"
            onClick={handleClick}>
            {props.text}
        </button>
    )
}

export default Button;
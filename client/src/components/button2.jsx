function ButtonTwo(props) {
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
        <button className="cursor-pointer w-[45vw] sm:w-[35vw] md:w-[30vw] lg:w-[15vw] my-1 mx-2 hover:bg-lightblue hover:text-darkblue bg-white mix-blend-soft-light text-[#343333] border border-solid bolder-[2px] rounded-[5px] border-lightblue p-[10px] text text-[1.1rem]"
            onClick={handleClick}>
            {props.text}
        </button>
    )
}

export default ButtonTwo;
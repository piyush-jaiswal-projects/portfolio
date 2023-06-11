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
        <button className="cursor-pointer w-[30%] mx-2 hover:bg-lightblue hover:text-darkblue bg-darkblue mix-blend-normal text-lightblue border border-solid bolder-[2px] rounded-[5px] border-lightblue p-[10px] text text-[1.5rem]"
            onClick={handleClick}>
            {props.text}
        </button>
    )
}

export default Button;
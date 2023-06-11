function scrollToDiv(divId) {
    const div = document.getElementById("contact");
        if (div) {
            div.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            alert("Can't perform this action")
    }
}

export default scrollToDiv;
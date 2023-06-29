
function scrollToDiv(divId) {
    const div = document.getElementById(divId);
        if (div) {
            div.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            alert("Can't perform this action")
    }
}

export default scrollToDiv;
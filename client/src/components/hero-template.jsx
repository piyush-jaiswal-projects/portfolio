import { heroText } from "../data";

function HeroTemplate(props) {
    var page, data;

    if (props.type === "page") {
         page = window.location.pathname.substring(1);
         data = heroText.filter(obj => obj.page === page); 
    }
    
    return (
        <div className="h-auto md:h-[50vw] lg:h-[35vw] flex items-center shadow">
            <div className="h-[30%] w-[90vw] md:w-[55vw] mx-auto text-center md:text-left md:ml-[8%] mb-[10vw]">
            <h2 className="text-lightblue text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[4vw] font-bold">{data[0].title}</h2>
            <h3 className="text-dullblue text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] leading-[2.3rem]">{data[0].description}</h3>
            </div>
        </div>
    )
}

export default HeroTemplate;
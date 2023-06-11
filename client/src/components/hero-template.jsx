import { heroText } from "../data";

function HeroTemplate(props) {
    var page, data;

    if (props.type === "page") {
         page = window.location.pathname.substring(1);
         data = heroText.filter(obj => obj.page === page); 
    }
    
    return (
        <div className="h-[75vh] flex items-center">
            <div className="h-[30%] w-[40%] ml-[8%] mb-[12%]">
            <h2 className="text-lightblue text-[3.5rem] font-bold">{data[0].title}</h2>
            <h3 className="text-dullblue text-[2rem] leading-[2.3rem]">{data[0].description}</h3>
            </div>
        </div>
    )
}

export default HeroTemplate;
import Button from "./button";
import { ScrollToDiv, SendMail } from "../functions";

function HomeHero() {

    return (
        <div className="h-[65vh] sm:h-[75vh] flex items-start sm:items-center">
            
            <div className="text-center md:text-left w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[45vw] h-[50%] m-auto md:ml-[10vw] mt-[10vw]">
                
                <div className="cursor-default animate-hero-text text-lightblue text-[10vw] sm:text-[7vw] md:text-[4vw] lg:text-[3vw] font-bold leading-tight">
                    <h2>Piyush Jaiswal</h2>
                    <h2 className="">I build things for web</h2>
                </div>

                <div className="animate-hero-btn p-0  mt-[3vw] md:mt-[1.5vw]">
                    <Button text="Hire Me" function={()=>SendMail("Hiring Inquiry", "")} />
                    <Button text="Get in touch" function={() => {
                        ScrollToDiv("Connect");
                        document.getElementById("Connect").focus();
                    } } />
                </div>

                <div>
                    <p className="animate-hero-desc text-dullblue text-[5vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] leading-tight mt-[3%]">
                        Hi, I am a software developer based out of India.
                        I specialize in developing robust and scalable web application and websites.
                    </p>
                </div>
            </div>

            {/* <div className="w-[55%] h-[80%] bg-lightblue">
                
            </div> */}
        </div>
    )
}

export default HomeHero;
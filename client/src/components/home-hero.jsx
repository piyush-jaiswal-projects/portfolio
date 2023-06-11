import Button from "./button";
import { ScrollToDiv, SendMail } from "../functions";

function HomeHero() {

    return (
        <div className="h-[75vh] flex items-center">
            
            <div className="w-[40%] h-[50%] ml-[10%] mb-[10%]">
                
                <div className="text-lightblue text-[3rem] font-bold leading-tight">
                    <h2>Piyush Jaiswal</h2>
                    <h2 className="">I build things for web</h2>
                </div>

                <div className=" m-0 p-0  mt-[1rem]">
                    <Button text="Hire Me" function={()=>SendMail("Hiring Inquiry", "")} />
                    <Button text="Get in touch" function={()=>ScrollToDiv("contact")} />
                </div>

                <div>
                    <p className="text-dullblue text-[1.3rem] leading-tight mt-[3%]">
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
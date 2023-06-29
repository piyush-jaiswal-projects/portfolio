import { ScrollToDiv} from "../functions";

function HomeHero() {

    return (
        <div className="h-[100%] flex items-center justify-center bg-darkblue">
            
            <div className="text-center mx-auto align-middle w-[90vw]">
                <div className="cursor-default text-center animate-hero-text text-white text-[10vw] sm:text-[7vw] md:text-[4vw] lg:text-[3vw] font-bold leading-tight">
                    <h2>Hello, I'm <label className="text-[#FF2171] font-[1000]">Piyush Jaiswal</label></h2>
                    <h2 className="">I'm a full stack web developer</h2>
                </div>

                <div className="flex justify-center">
                <div className="animate-hero-btn mt-[3vw] md:mt-[1.5vw]">
                    <button onClick={()=>ScrollToDiv("Navbar")} className="custom-btn cursor-pointer w-[100%] my-1 mx-2 hover:bg-darkblueThree text-white border border-solid bolder-[2px] border-white p-[10px] text-[1.3rem]">View my work</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default HomeHero;
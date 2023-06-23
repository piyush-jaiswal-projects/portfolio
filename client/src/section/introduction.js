import { Button, TextPara } from "../components"
import { ScrollToDiv } from "../functions"
import { ProfilePic } from "../assets"

export default function Introduction() {

    return (
        <div className="w-[90vw] mx-auto bg-darkblue flex items-center flex-wrap">

            <div className="md:w-[50vw] md:mx-auto inline-flex items-center flex-wrap">
                <div>
                    <TextPara >
                    Hi, I am a software developer based out of India. I am proficient in Full Stack Web Developmet. I generally work on MERN stack. And trying to learn new stuff as well...</TextPara>
                </div>
                <div className="mx-auto">
                    <Button text="Know More" actionType="function" function={()=>ScrollToDiv("Story")} />
                    {/* <Button text="Send Text" actionType="function" function={() => {
                        ScrollToDiv("Message");
                        document.getElementById("Feedback-Input").focus();
                    }} /> */}
                </div>
            </div>

            <div className="mx-auto my-[20px] md:my-[0vw] w-[65vw] h-[70vw] md:h-[50vw] md:w-[35vw] inline-flex items-center flex-wrap">
                <div className="bg-lightblue w-[65vw] h-[70vw] md:h-[35vw] md:w-[30vw] rounded-md"> 
                    <img className=" object-cover max-h-[100%] w-[65vw] h-[70vw] md:w-[30vw] rounded-md relative bottom-[1.5vw] right-[1.5vw] md:bottom-[1vw] md:right-[1vw]" src={ProfilePic} alt=" " />
                </div>
            </div>

        </div>
    )
}
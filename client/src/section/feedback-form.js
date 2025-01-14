import { Button} from "../components"
import { useState } from "react"
import { developerMailId } from "../data";

export default function FeedbackForm(props) {
    const [data, setData] = useState("");

    function sendFeedback() {
        window.location.href = "mailto:" + developerMailId + "?subject=" + encodeURIComponent("Message") + '&body=' + encodeURIComponent(data);
    }

    return (
        <div className="bg-darkblueTwo text-center py-10" id={props.id}>
            <h2 className="text-lightblue font-bold text-[8vw] sm:text-[6vw] md:text-[3.5vw] lg:text-[2.5vw] text-center my-[0.5rem]">{props.title}</h2>
            <p className="mx-auto text-center text-dullblue text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.3vw] w-[100vw] sm:w-[80vw] md:w-[65vw] lg:w-[50vw] mb-6 leading-tight">
                {props.desc}
            </p>
            <input id="Feedback-Input" value={data} onChange={(e) => setData(e.target.value)} placeholder="Please type here..." className="text-lightblue outline-none text-center text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.3vw] p-2 w-[80vw] border border-t-0 border-l-0 border-r-0 border-b-dullblue bg-darkblueTwo mb-4" />
            <br />
            <Button text="Submit" actionType="function" function={sendFeedback} />
        </div>
    )
}
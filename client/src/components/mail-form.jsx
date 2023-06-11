import { useState } from "react";
import Button from "./button";
import { SendMail } from "../functions";

function MailForm() {
    const [mailData, setMailData] = useState({
        subject: "",
        body: ""
    });

    function handleChange(e) {
        setMailData({ ...mailData, [e.target.id]: e.target.value });
    }

    return (
        <div>
            <label htmlFor="subject">Subject</label>
            <input autoComplete="off" id="subject" value={mailData.subject} onChange={handleChange} />
            
            <label htmlFor="body">Body</label>
            <textarea autoComplete="off" id="body" value={mailData.body} onChange={handleChange} />

            <Button text="Send" actionType="function" function={()=>SendMail(mailData.subject, mailData.body)} />        
        </div>
    )
}

export default MailForm;
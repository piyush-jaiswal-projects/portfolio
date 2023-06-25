import { Heading, CircularLink } from "../components"
import { git, linkedin, mail, twitter, leetcode } from "../assets"
import { developerMailId, Github, Linkedin, Twitter, Leetcode } from "../data";

export default function Connect(props) {

    const MailURL = `mailto:${encodeURIComponent(developerMailId)}?subject=${encodeURIComponent("Let's Connect")}&body=${encodeURIComponent("")}`;
    
    return (
        <div className="bg-white text-center text-darkblue mx-auto py-[1vw]">
            <div className="w-[70vw] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[3vw]">Connect</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>

            <div>
                <CircularLink name="Git" link={Github} image={git} theme="dark" />
                <CircularLink name="Linkedin" link={Linkedin} image={linkedin} theme="dark" />
                <CircularLink name="Twitter" link={Twitter} image={twitter} theme="dark" />
                <CircularLink name="Email" link={MailURL} image={mail} theme="dark" />
                <CircularLink name="Leetcode" link={Leetcode} image={leetcode} theme="dark" />
            </div>
        </div>
    )
}
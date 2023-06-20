import { Heading, CircularLink } from "../components"
import { git, linkedin, mail, twitter, leetcode } from "../assets"
import { developerMailId, Github, Linkedin, Twitter, Leetcode } from "../data";

export default function Connect(props) {

    const MailURL = `mailto:${encodeURIComponent(developerMailId)}?subject=${encodeURIComponent("Let's Connect")}&body=${encodeURIComponent("")}`;
    
    return (
        <div id="Connect" className="bg-darkblueThree text-center text-white mx-auto py-[2vw]">
            <Heading text="Let's Connect" />

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
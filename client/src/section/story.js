import { Heading } from "../components"

export default function Story(props) {
    return (
        <div id="Story" className="bg-darkblue w-[90vw] text-[3.5vw] sm:text-[3vw] md:text-[2.3vw] lg:text-[1.3vw] mx-auto my-5">
            <Heading text=" My Story" />
            {/* A deep dive into my story */}
            <p className="text-white">
            Hey there, Currently I am a final-year student pursuing my bachelor's in electrical and electronics engineering 
                UIET, Panjab University. I believe in personal growth and value addition. I am trying to build valuable products and services.
                <br />
                🔹I am a full-stack web developer(MERN stack). I am currently working on some personal projects.
                <br />
🔹Occasionally, I write articles on dev.to platform and share my learnings. 
<br />
When I am not working I usually spend my time listening to songs.
            </p>
        </div>
    )
}
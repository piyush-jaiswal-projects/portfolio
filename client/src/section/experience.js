import { experiences } from "../data"
import { ExpCard } from "../components"

export default function Experience(props) {
    return (
        <div className="bg-white my-[30px] border-darkblue">
            <div className="w-[70vw] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[6vw] md:text-[3vw]">Experience</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            {experiences.map((exp) => {
                return (
                    <ExpCard exp={exp} />
                )
            })}
        </div>
    )
}
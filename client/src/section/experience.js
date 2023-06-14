import { experiences } from "../data"
import { ExpCard } from "../components"

export default function Experience(props) {
    return (
        <div className="bg-darkblue my-[30px]">
            {experiences.map((exp) => {
                return (
                    <ExpCard exp={exp} />
                )
            })}
        </div>
    )
}
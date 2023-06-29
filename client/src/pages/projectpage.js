import { useParams } from "react-router-dom";
import { projects } from "../data";
import { Landing, ProjectBody} from "../section";

export default function ProjectPage(props) {
    const projectId = useParams().projectId;
    const project = projects.filter((project) => project.id === Number(projectId))[0];
    
    return (
        <div className="">
            <Landing type="ProjectPage" title={project.title} desc={project.tagline} />
            <div className="bg-darkblue">
            <ProjectBody project={project} />
            {/* <FeedbackForm title="Feedback" desc="It would mean world to me if you take out few seconds out
                of your busy schedule to write a feedback for me 
                so that I can improve."/> */}
            </div>
        </div>
    )
}
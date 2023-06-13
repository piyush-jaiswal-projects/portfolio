import { useParams } from "react-router-dom";
import { projects } from "../data";
import { Landing, Connect, ProjectBody, FeedbackForm } from "../section";

export default function ProjectPage(props) {
    const projectId = useParams().projectId;
    const project = projects.filter((project) => project.id === Number(projectId))[0];
    console.log(project);
    
    return (
        <div>
            <Landing type="ProjectPage" title={project.title} desc={project.tagline} />
            <ProjectBody project={project} />
            <Connect />
            <FeedbackForm title="Feedback" desc="It would mean world to me if you take out few seconds out
                of your busy schedule to write a feedback for me 
                so that I can improve."/>
        </div>
    )
}
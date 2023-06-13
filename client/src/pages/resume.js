import { PDFviewer } from '../components';
import { Landing } from "../section";
import { ButtonTwo } from "../components";

function ResumeViewer() {
    
    return (
        <>
            <Landing />
            <div className="flex justify-end m-[20px]">
                <ButtonTwo text="Download Resume" />
                <ButtonTwo text="Mail Resume" />
            </div>    
            <PDFviewer filePath="Resume.pdf" />
        </>
    )
}

export default ResumeViewer;
import { PDFviewer, ButtonTwo } from '../components';
import { Landing } from "../section";
import { resumeURL } from '../data';
import ErrorBoundary from '../ErrorHandler/error-boundary'
import { DownloadFile } from '../functions';

function ResumeViewer() {
    
    return (
        <>
            <Landing type="page" />
            <div className="flex justify-end m-[20px]">
                <ButtonTwo text="Download Resume" actionType="function" function={()=>{DownloadFile(resumeURL)}} />
            </div>    
            <ErrorBoundary type="component">
            <PDFviewer title="Resume" fileURL={resumeURL} />
            </ErrorBoundary>
        </>
    )
}

export default ResumeViewer;
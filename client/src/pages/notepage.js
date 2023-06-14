import { useParams } from "react-router-dom"
import { notes } from "../data";
import { Landing } from "../section";
import { PDFviewer, Button } from "../components";
import { DownloadFile } from "../functions";

export default function NotePage(props) {
    const id = useParams().notesId;
    const note = notes.filter((obj) => obj.id === Number(id))[0];
    return (
        <>
            <Landing type="notes" title={note.title} desc={note.desc} />
            <div className="text-right mx-5 my-4">
                <Button text="Download PDF" actionType="function" function={()=>{DownloadFile(note.url)}} />
                <Button text="Study Source" actionType="redirect" url={note.src} />
            </div>
            <div>
                <PDFviewer fileURL={note.url} title={note.title} />
            </div>
        </>
    )
}
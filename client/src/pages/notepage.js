import { useParams } from "react-router-dom"
import { notes } from "../data";
import { Landing } from "../section";

export default function NotePage(props) {
    const id = useParams().notesId;
    const note = notes.filter((obj) => obj.id === Number(id))[0];
    return (
        <>
            <Landing type="notes" title={note.title} desc={note.desc} />
            <div>
                {/* EMBEDD PDF */}
            </div>
        </>
    )
}
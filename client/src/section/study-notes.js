import { Heading, NotesCard } from "../components"
import { notes } from "../data"

export default function StudyNotes() {
    return (
        <div className="bg-darkblue my-5 text-center">
            <Heading text="My Study Notes" />
            <div className="flex flex-wrap items-center justify-center w-[90vw] mx-auto">
                {notes.map((note) => {
                    return (
                        <NotesCard id={note.id} title={note.title} />
                )})}
            </div>
        </div>
    )
}
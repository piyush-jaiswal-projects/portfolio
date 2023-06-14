
export default function PDFviewer(props) {
    return (
        <div className='mx-auto w-[90vw]'>
            <iframe src={props.fileURL} title={props.title} className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[100vw] lg:h-[80vw] mx-auto" />
        </div>
    )
}
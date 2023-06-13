
export default function PDFviewer(props) {
    return (
        <div className='mx-auto w-[90vw]'>
            <embed src={props.filePath} type="application/pdf" className="w-[100%]"></embed>
        </div>
    )
}
import ComponentFallback from "../ErrorHandler/component-fallback"

export default function PDFviewer(props) {
    return (
        <>
            {
                (props.fileURL && props.fileURL !== "")
                    ?
                    <div className='mx-auto'>
                        <iframe src={props.fileURL} title={props.title} className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[100vw] lg:h-[80vw] mx-auto" />
                    </div>
                    :
                    <ComponentFallback type="notfound" />
                    }
        </>
    )
}
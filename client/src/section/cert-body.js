import { Label, PDFviewer } from "../components"

export default function CertBody(props) {
    return (
        <div className="bg-darkblue my-4">
            <div className="bg-white rounded-md overflow-x-hidden overflow-y-scroll w-[80vw] h-[55vw] lg:w-[60vw] lg:h-[40vw] mx-auto pt-[20px]">
                <PDFviewer fileURL={props.cert.url} title={props.cert.title}  />
            </div>

            <div className="w-[90vw] mx-auto py-10">
                <Label text="Program Outcomes" />
                <br/>
                <p className="leading-tight text-grey ">{props.cert.outcomes}</p>
            </div>
        </div>
    )
}
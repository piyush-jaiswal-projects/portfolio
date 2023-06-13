import { Label } from "../components"

export default function CertBody(props) {
    return (
        <div className="bg-darkblue my-4">
            <div className="bg-white rounded-md w-[80vw] h-[50vw] lg:w-[60vw] lg:h-[35vw] mx-auto pt-[20px]">
                {/* EMBED PDF */}
            </div>

            <div className="w-[90vw] mx-auto py-10">
                <Label text="Program Outcomes" />
                <br/>
                <p className="leading-tight text-lightblue ">{props.cert.outcomes}</p>
            </div>
        </div>
    )
}
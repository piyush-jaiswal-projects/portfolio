import { useParams } from "react-router-dom"
import { certificates } from "../data"
import { Landing, CertBody, Connect } from "../section";

export default function CertificatePage() {
    const id = useParams().certId;
    const cert = certificates.filter((obj)=>obj.id === Number(id))[0]
    return (
        <>
            <Landing type="cert" title={cert.title} desc={cert.desc} />
            <div className="bg-darkblue">
            <CertBody cert={cert} /> 
            <Connect />
            </div>
        </>
    )
}
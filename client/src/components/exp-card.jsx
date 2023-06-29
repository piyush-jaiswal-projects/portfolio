
import { link } from "../assets";

export default function ExpCard(props) {
    const exp = props.exp;

    return (
        <div key={exp.id} className="smooth-card hover:scale-[1.1] box-shadow border lg:border-none border-0.1 border-grey rounded-md flex flex-wrap items-center w-[90vw] lg:w-[55vw] mx-auto my-10 p-2">
            
            <div className=" lg:w-[30%] px-5">
                <label className="text-darkblue">{exp.duration}</label>
            </div>

            <div className=" lg:w-[70%] p-4">
                <h2 className="text-darkblue text-[140%]">{exp.org}</h2>
                <h4 className="text-[#808080] text-[110%]">{exp.position}</h4>
                <p className="leading-tight text-grey">{exp.desc}</p>
                {exp.url
                    ?
                    <a href={exp.url} target="__blank" className="flex text-darkblue my-2">
                    <img src={link} alt="" className="mr-1" />
                    {exp.url}
                    </a>
                    : ""}
                <div>
                    <h4 className="text-[#808080] text-[80%]">Tech Stack</h4>
                    {
                        exp.tech.map((item) => {
                            return (
                                <TechCard id={exp.id} tech={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function TechCard(props) {
    return (
        <div key={props.id} className="inline-block rounded-xl m-1 w-auto p-1 px-2 bg-lightblue">
            <p className="text-white">{props.tech}</p>
        </div>
    )
}
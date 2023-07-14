import { Label, CircularImage } from "../components"

export default function ProjectBody(props) {
    return (
        <div className="bg-darkblue flex w-[90vw] mx-auto flex-wrap justify-center">
            <Section1 project={props.project} />
            <Section2 project={props.project} />
        </div>
    )
}

function Section1(props) {
    return (
        <div className="lg:w-[35vw] flex flex-wrap my-8 ">
            
            <div className="my-4 block w-[100%]">
                <Label text="Description" />
                <p className="text-white leading-tight text-left">
                    {props.project.description}
                </p>
            </div>

            <div className="my-4 w-[100%]">
                <Label text="Standard Features" />
                <ol className="list-decimal">
                    {props.project.standard.map((item, index) => { return <li key={index} className="text-white ml-5 pl-2">{item}</li>})}
                </ol>
            </div>

            {props.project.standout.length === 0 ? "" : 
            <div className="my-4 w-[100%]">
                <Label text="Standout Features" />
                <ol className="list-decimal">
                    {props.project.standout.map((item, index) => { return <li key={index} className="text-white ml-5 pl-2">{item}</li>})}
                </ol>
                </div>
            }

            {props.project.achievements.length === 0 ? "" :
                <div className="my-4 w-[100%]">
                <Label text="Achievements" />
                <ol className="list-decimal">
                    {props.project.achievements.map((item) => { return <li className="text-white ml-5 pl-2">{item}</li>})}
                </ol>
            </div>
                }
            
        </div>
    )
}

function Section2(props) {
    return (
        <div className="lg:w-[35vw] my-5 lg:border md:border-l-0 lg:border-l-2 lg:border-l-lightblue lg:border-t-0 lg:border-r-0 lg:border-b-0">

            <div className="mx-auto w-[80vw] lg:w-[25vw] border-2 border-darkblueThree lg:ml-24 lg:mt-10 rounded-lg">
                <img className="rounded-lg" src={props.project.previewImage} alt={props.project.title} />
            </div>

            <div className="lg:w-[40vw] lg:ml-24 lg:mt-10">

            <div className="my-4 lg:w-[40vw]">
                <label className="text-[#808080]">Github</label>
                <br />
                <a className="text-grey lg:text-[1.5vw]" href={props.project.git} >{props.project.git}</a>
            </div>

                
            {props.project.live === "..." ? "" :
                <div className="my-4 lg:w-[40vw]">
            <label className="text-[#808080]">Live Project</label>
                <br />
                 <a className="text-grey lg:text-[1.5vw]" href={props.project.live} >{props.project.live}</a>
            </div>
                }


            <div className="my-4 lg:w-[40vw]">
            <label className="text-[#808080]">Tech Used</label>
                <br />
                <div className="my-2">
                {props.project.tech.map((item) => {
                    return <CircularImage name={item} label="none"/>
                })}
                </div>
                </div>
                
            </div>

        </div>
    )
}
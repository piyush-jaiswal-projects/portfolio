import { Tab, Grid } from '../components'
import { projects } from '../data'
import { createContext, useState } from 'react'

const Data = createContext(null);

export default function ProjectGrid(props) {
    const [Projects, setProjects] = useState(props.slice === 5 ? projects.slice(0,5) : projects);

    return (
        <div className="bg-white py-[2vw]">
            <div className="w-[70vw] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[6vw] md:text-[3vw]">Projects</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            <Data.Provider value={{
                Projects: Projects,
                setProjects: setProjects
            }}>
            <Tab />
                <Grid type={props.type} />
            </Data.Provider>
        </div>
    )
}

export { Data };
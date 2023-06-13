import { Tab, Grid } from '../components'
import { projects } from '../data'
import { createContext, useState } from 'react'

const Data = createContext(null);

export default function ProjectGrid() {
    const [Projects, setProjects] = useState(projects);

    return (
        <div className="bg-darkblue py-[2vw]">
            <label className="w-[90vw] text-dullblue ml-[5vw]">Categories</label>
            <Data.Provider value={{
                Projects: Projects,
                setProjects: setProjects
            }}>
            <Tab />
            <Grid />
            </Data.Provider>
        </div>
    )
}

export { Data };
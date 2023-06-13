import { SmallCard } from "../components"

function TabButton(props) {
    return (
        <button className=" w-[12vw] inline-flex cursor-pointer py-[10px] text-lightblue text-[3vw] md:text-[2.2vw] lg:text-[1.5vw]">
            {props.text}
        </button>
    )
}

function Tab() {
    return (
        <div className="text-center border-t border-b border-lightblue flex items-center justify-around flex-wrap flex-row w-[90vw] mx-auto">
                <TabButton text="All" />
                <TabButton text="Frontend" />
                <TabButton text="Backend" />
                <TabButton text="FullStack" />
                <TabButton text="DSA" />
                <TabButton text="Others" />
        </div>
    )
}

function Grid() {
    return (
        <div className="w-[90vw] mx-auto p-3 flex items-center flex-wrap">
            <SmallCard />
            <SmallCard />
            <SmallCard />
        </div>
    )
}

export default function ProjectGrid() {
    return (
        <div className="bg-darkblue py-[2vw]">
            <label className="w-[90vw] text-dullblue ml-[5vw]">Categories</label>
            <Tab />
            <Grid />
        </div>
    )
}
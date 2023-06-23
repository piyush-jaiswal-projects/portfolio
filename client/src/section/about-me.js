
export default function AboutMe() {
    return (
        <div className="bg-white">
            
            <div className="w-[70vw] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[3vw]">About</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            
            <div className="h-[40vh] flex justify-center items-center">
            <div className="grid grid-cols-4 gap-5 text-center">
                    <Card src="" text="Fast" desc="" />
                    <Card src="" text="Fast" desc="" />
                    <Card src="" text="Fast" desc="" />
                    <Card src="" text="Fast" desc="" />
            </div>
            </div>

        </div>
    )
}

function Card(props) {
    return (
        <div className="w-[300px] bg-[red]">
            <div>
                <img src={props.src} alt="" />
            </div>
            <h3 className="text-darkblueThree">{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
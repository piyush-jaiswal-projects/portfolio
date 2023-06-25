
export default function AboutMe() {
    return (
        <div className="bg-white mx-auto w-[80%]">
            
            <div className="w-[70vw] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[3vw]">About</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            
            <div className="h-[40vh] flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
                    <Card
                        src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687735819/qvxetuuslibzotkz6zoy.jpg" 
                        text="Fast Service" desc="Fast load times and lag free interaction, my highest priority." />
                    <Card src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687735819/qvxetuuslibzotkz6zoy.jpg"
                        text="Responsive" desc="Fast load times and lag free interaction, my highest priority." />
                    <Card src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687735819/qvxetuuslibzotkz6zoy.jpg"
                        text="Scalable" desc="Fast load times and lag free interaction, my highest priority." />
                    <Card src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687735819/qvxetuuslibzotkz6zoy.jpg"
                        text="Unit Testing" desc="Fast load times and lag free interaction, my highest priority." />
            </div>
            </div>

            <div className="w-[100%] text-center mx-auto my-4">
                <h3 className="text-darkblueThree">Skills</h3>
            </div>
                <div className="text-center mx-auto w-[50%] my-4">
                <img className="object-cover border border-darkblueThree mx-auto my-2 p-1 w-[90px] h-[90px] rounded-full"
                    src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687737062/hkk4nt5ioxp02ud3adqx.png" alt=" " />
                    {/* <h1 className="text-[grey]">Who's this guy?</h1> */}
                    <p className="text-[grey]">Hi, I am a software developer based out of India. I specialize in developing robust and scalable web application and websites.</p>
                </div>

        </div>
    )
}

function Card(props) {
    return (
        <div className="hexagon w-[100%] mx-auto block text-center">
            <div className="flex justify-center">
                <img className="w-[60%]" src={props.src} alt="" />
            </div>
            <h3 className="text-darkblueThree">{props.text}</h3>
            <p className="text-[grey]">{props.desc}</p>
        </div>
    )
}
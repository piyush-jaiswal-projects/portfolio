import { skills } from "../data"
import $ from 'jquery';

export default function AboutMe() {
    return (
        <div className="bg-white  mx-auto w-[85%]">
            
            <div className="w-[70vw] mx-auto mb-[10px] py-[1vw] text-center">
                <h1 className="text-darkblue text-[6vw] md:text-[3vw]">About</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            <h3 className="text-darkblueThree flex justify-center mb-[30px]">I build webapps which are</h3>
            <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center">
                    <Card
                        src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687950650/kvblsdkznredktj1hzti.svg" 
                        text="Fast" desc="Fast loading time and lag free interaction" />
                    <Card src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687950673/cqnhjsyrwqxwsf9ulesx.svg"
                        text="Responsive" desc="Smooth user experience and fully responsive UI" />
                    <Card src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687950695/slmp2xu8i1s3p9cuyres.svg"
                        text="Scalable" desc="Can handle large traffic without decrease in performance" />
                    <Card src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687951241/p8pofguhalze35ovi5qw.svg"
                        text="Tested" desc="Intensive testing before deployment of product" />
            </div>
            </div>

            <div className="md:flex justify-center items-center mt-[30px]">
            <div className="animate-skills-section relative w-[100%] md:w-[70%] text-center mx-auto my-8">
                <h3 className="text-darkblueThree font-bold text-[1.5rem]">Skills</h3>
                <div className="flex justify-center md:justify-star items-center flex-wrap">
                {skills.map((skill) => {
                    return (
                        <div className="delay-75 flex hover:bg-darkblue hover:text-darkblueTwo justify-around items-center w-[110px] border border-darkblueThree text-darkblue m-2 rounded-lg">
                            <label className="text-left">{skill.name}</label>
                        </div>
                    )
                })}
                </div>
            </div>


                
                {/* <div className="flex shadow-lg border border-darkblueThree p-2 rounded-lg justify-around items-center text-right mx-auto md:w-[50%] my-4">
                <img className="object-cover  border-darkblueThree mx-auto my-2 p-1 w-[90px] h-[90px] rounded-full"
                    src="http://res.cloudinary.com/deo80u7qs/image/upload/v1687737062/hkk4nt5ioxp02ud3adqx.png" alt=" " />
                    <p className="text-[grey]">Hi, I am a software developer based out of India. I specialize in developing robust and scalable web application and websites.</p>
                </div> */}
           </div>

        </div>
    )
}

function Card(props) {
    return (
        <div id={props.text} className="smooth-card hover:scale-[1.2] relative  hover:w-[100%] hexagon w-[100%] mx-auto block text-center">
            <div className="flex justify-center">
                <img className="w-[60%] h-[100%]" src={props.src} alt="" />
            </div>
            <h3 className="text-darkblueThree">{props.text}</h3>
            <p className="text-[grey]">{props.desc}</p>
        </div>
    )
}
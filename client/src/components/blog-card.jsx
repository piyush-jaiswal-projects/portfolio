// import { Project1 } from "../assets";

export default function BlogCard(props) {
    // var image;
    // switch (props.blog.imageName) {
    //     case "Project1":
    //         image = Project1
    //         break;
    //     default:
    //         image = Project1
    //         break;
    // }
    return (
        <div key={props.blog.id} className="bg-darkblueTwo w-[350px] mx-auto my-2 py-2 rounded-lg items-center shadow-lg">
            
            <div className="my-4 w-[90%] mx-auto md:m-4 rounded-md">
                <img className="object-cover rounded-md" src={props.blog.image} alt={props.blog.title}></img>
            </div>

            <div className="mx-4 md:m-4 w-[90%]">
                <h2 className="text-lightblue text-[5vw] md:text-[1.5vw]">{props.blog.title}</h2>
                <p className="text-dullblue text-justify md:text-left text-[3vw] md:text-[1vw] leading-tight">{props.blog.desc.substring(0, 300)}</p>
                <br />
                <a className="" href={"/blogs/"+props.blog.id}>Read More</a>
            </div>
        </div>
    )
}
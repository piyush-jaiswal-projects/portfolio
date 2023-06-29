
export default function BlogCard(props) {
    return (
        <div key={props.blog.id} className="smooth-card hover:scale-[1.1] overflow-hidden w-[320px] h-[400px] border border-darkblueThree mx-auto my-4 py-2 rounded-lg text-center">
            
            <div className="my-4 w-[90%] mx-auto md:m-4 rounded-md">
                <img className="object-cover rounded-md" src={props.blog.cover_image} alt={props.blog.title}></img>
            </div>

            <div className="mx-4 md:m-4 w-[90%]">
                <h2 className="text-lightblue text-[1.5rem] text-left leading-tight mb-2">{props.blog.title.substring(0, 50)}</h2>
                <p className="text-dullblue text-justify md:text-left text-[1rem] leading-tight">{props.blog.description.substring(0, 150)}</p>
                <br />
                <a className="font-bold hover:text-darkblueThree" href={"/blogs/"+props.blog.id} rel="noreferrer" target="_blank">Read More</a>
            </div>
        </div>
    )
}
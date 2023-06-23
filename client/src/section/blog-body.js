import { blogs } from "../data"
import { BlogCard } from "../components"

export default function BlogBody(props) {

    

    return (
        <div className="">
            <div className="w-[70vw] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[3vw]">Projects</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            <div className="grid grid-cols-3 gap-0">
            
            {blogs.map((blog) => {
                return (
                    <BlogCard blog={blog} />
                )
            })}
                <div className="popup w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw] bg-lightblue shadow-xl mx-auto rounded-md my-3 md:my-4">
                    View More
        </div>
        </div>
        </div>
    )
}

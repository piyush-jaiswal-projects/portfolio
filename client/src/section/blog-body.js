import { blogs } from "../data"
import { BlogCard } from "../components"

export default function BlogBody(props) {

    const blogSet = blogs.slice(0, 3);

    return (
        <div className=" w-[90%] mx-auto">
            <div className="w-[100%] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[3vw]">Blogs</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            <div className="grid grid-cols-3 grid-rows-1 gap-0">
            
            {blogSet.map((blog) => {
                return (
                    <BlogCard blog={blog} />
                )
            })}
                
            </div>
            <div className="mx-auto text-center my-[2vw]">
            <button onClick={()=>{window.location.replace("/blogs")}} className="custom-btn cursor-pointer w-[10rem] my-1 mx-2 bg-darkblueThree text-white rounded border border-solid bolder-[2px] border-white p-[10px] text-[1.3rem]">View more</button>
            </div>
        </div>
    )
}

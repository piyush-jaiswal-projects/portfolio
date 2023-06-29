import blogs from '../blogData'
import { BlogCard } from "../components"

export default function BlogBody(props) {

    const blog = blogs;
    console.log(blog[0]);
    const blogSet = props.btn === false ? blog : blog.slice(0, 3);


    return (
        <>
            <div className="w-[90%] lg:w-[80%] mx-auto">
            <div className="w-[100%] mx-auto py-[1vw] text-center">
                <h1 className="text-darkblue text-[6vw] md:text-[3vw]">Blogs</h1>
                <div className="w-[100px] h-[5px] bg-darkblue mx-auto"></div>
            </div>
            <div className="flex justify-center items-center flex-wrap">
            
            {blogSet.map((blog) => {
                return (
                    <BlogCard blog={blog} />
                )
            })}
                
            </div>
            {props.btn === false ? "" : <div className="mx-auto text-center my-[2vw]">
            <a href="/blog" rel="noreferrer" target="_blank" className="custom-btn cursor-pointer w-[10rem] my-1 mx-2 bg-darkblueThree hover:bg-white hover:text-darkblueThree text-white rounded border border-solid bolder-[2px] border-darkblueThree p-[10px] text-[1.3rem]">View more</a>
            </div>}
        </div>
        </>
    )
}

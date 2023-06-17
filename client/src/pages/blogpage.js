import { useParams } from "react-router-dom"
import { Landing } from "../section";

export default function BlogPage() {
    var blogs = [];

    const id = useParams().blogId;
    const blog = blogs.filter((obj)=> obj.id === Number(id))[0]
    return (
        <>
            <Landing type="blog" title={blog.title} desc={blog.desc.substring(1, 20)} />
            
            <div className="w-[90vw] mx-auto my-4 text-[20px] leading-tight">
                {blog.content}
            </div>
        </>
    )
}
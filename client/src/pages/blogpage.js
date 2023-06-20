import { useParams } from "react-router-dom"
import { Landing } from "../section";
import { blogs } from "../data";
import ReactMarkdown from "react-markdown";

export default function BlogPage() {

    const id = useParams().blogId;
    const blog = blogs.filter((obj) => obj.id === Number(id))[0]
    return (
        <>
            <Landing type="blog" title={blog.title} desc={blog.desc.substring(1, 20)} />
            
            <div className="text-white w-[90vw] mx-auto my-4 text-[20px] leading-tight">
                <ReactMarkdown>
                {blog.content}
                </ReactMarkdown>
            </div>
        </>
    )
}
import { useParams } from "react-router-dom"
import blogs from "../blogData";
import ReactMarkdown from 'react-markdown';

export default function BlogPage() {

    const id = useParams().blogId;
    const data = blogs;
    const blog = data.filter((obj) => obj.id === Number(id))[0]
    console.log(blog);
    return (
        <>
            <div className="overflow-hidden mx-auto w-[90vw] md:w-[60vw] border text-center rounded-lg p-2 my-4">
                <img className="my-2 mb-4" src={blog.cover_image} alt="" />
            <h1 className="text-[5vw] md:text-[3vw] lg:text-[2vw] font-bold">{blog.title}</h1>
            
            <div className="text-darkblue text-left overflow-x-clip mx-auto my-4 p-4 text-[20px] leading-tight">
                    <ReactMarkdown>
                    {blog.body_markdown}
                </ReactMarkdown>
            </div>
            </div>
        </>
    )
}
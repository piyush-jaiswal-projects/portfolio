import { blogs } from "../data"
import { BlogCard } from "../components"

export default function BlogBody(props) {

    

    return (
        <div className="bg-darkblue">
            
            {blogs.map((blog) => {
                return (
                    <BlogCard blog={blog} />
                )
            })}
        </div>
    )
}

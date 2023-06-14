import { BlogCard } from "../components"
import { blogs } from "../data"

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
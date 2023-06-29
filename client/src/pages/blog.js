import { Landing, BlogBody } from "../section";

function Blog() {
    return (
        <>
            <Landing type="page" /> 
            <BlogBody btn={false} />
        </>
    )
}

export default Blog;
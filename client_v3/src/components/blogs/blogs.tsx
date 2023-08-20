import React from 'react'
import BlogCard from './blog-card'
import Link from 'next/link'

export default function Blogs() {
    return (
        <div className="mt-[100px] my-[20px] w-[95%] md:w-[90%] mx-auto">
            <h1 className="text-[2rem] translate-right">Articles</h1>
            <section className='w-[95%] mx-auto my-[20px] grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-2 section-translate-up'>
                <BlogCard title='article title' desc='Built website to showcase and market their SaaS product. Developed admin portal. Implemented user verification and device notification functionality.' image='' />
                <BlogCard title='article title' desc='Built website to showcase and market their SaaS product. Developed admin portal. Implemented user verification and device notification functionality.' image='' />
                <BlogCard title='article title' desc='Built website to showcase and market their SaaS product. Developed admin portal. Implemented user verification and device notification functionality.' image='' />
            </section>
            <div className="text-center">
        <Link
          href="/articles"
          className="border border-secondary p-2 rounded-lg"
        >
          Read All Articles
        </Link>
      </div>
    </div>
    )
}
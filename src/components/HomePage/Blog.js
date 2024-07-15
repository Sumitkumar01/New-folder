import React from 'react'

import blog1 from "../../../public/images/img1.webp"
import blog2 from "../../../public/images/nature.webp"
import blog3 from "../../../public/images/palningrpmantic.webp"
import BlogCard from './BlogCard'

const Blog = () => {
    const blogCardData = [
        {
            "route": "/blogs",
            "image": blog1,
            "date": "Sep 26",
            "time": "2 min",
            "heading": "Unleashing Adventure: Exploring the Thrilling Trekking Trails at Everest Base",
            "paragraph": `"Get your backpack ready as we dive into the world of trekking trails at Everest Base Camp"`,
        },
        {
            "route": "/blogs",
            "image": blog2,
            "date": "Oct 23",
            "time": "20 min",
            "heading": "Unplugging in Nature: The Healing Power of a Digital Detox Retreat",
            "paragraph": `"A digital detox retreat isn't just a trend; it's a necessity for holistic well-being, do it at EBC Mussoorie"`,
        },
        {
            "route": "/blogs",
            "image": blog3,
            "date": "Nov 23",
            "time": "5 min",
            "heading": "Planning a Romantic Getaway: Creating Memories at Everest Base Camp Mussoorie",
            "paragraph": `"Imagine a romantic escape where every moment feels like a cherished memory in the making. Welcome to Everest Base`,
        },
    ]
    return (
        <div className='bg-[#D5D5D5] py-10'>
            <div className='max-w-[1060px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {
                        blogCardData?.map((blogdata, index) => (
                            <BlogCard key={index} data={blogdata} />

                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Blog
"use client";

import React from "react";
import ebclogo from "../../../public/images/ebclogo.png";
import Image from "next/image";
import Link from "next/link";
import blogData from "./blogData"



const BlogComponent = () => {

    const [activeCategory, setActiveCategory] = React.useState("All");
    const [data, setData] = React.useState(blogData);

    const category = ["All", ...new Set(blogData.map((item) => item.Category))]



    const filterData = React.useCallback((category) => {

        if (category === "ALL") {
            setData(blogData);
        } else {
            const filteredData = blogData.filter(
                (item) => item.Category === category
            )
            setData(filteredData);
        }
        setActiveCategory(category);
    }, [])

    // React.useEffect(() => {
    //     filterData("All");
    // }, [filterData]);

    return (
        <div className="max-w-[1024px] w-full mx-auto bg-[#BCD0BE] px-4 py-2">
            <div className="flex gap-4 items-center">
                {/* <button
                    onClick={() => filterData(null)}
                    className="hover:bg-[#29422C] px-4 py-1 hover:text-white capitalize"
                >
                    All
                </button> */}
                {category.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => filterData(item)}
                        className={`px-4 py-1 capitalize ${activeCategory === item
                                ? "bg-[#29422C] text-white"
                                : "hover:bg-[#29422C] hover:text-white"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    {data.map((item, i) => (
                        <div className="border border-gray-400 grid lg:grid-cols-5 gap-6" key={i}>
                            <div className="lg:col-span-2 col-span-1 w-full">
                                <div className="w-full">
                                    <Image
                                        src={item.image}
                                        alt="image"
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            <Link
                                href={`/blogs/${item.title.trim()}`}
                                onClick={() => console.log(`/blogs/${item.title.trim()}`)}
                                className="lg:col-span-3 p-2"
                            >
                                <div className="flex gap-4 items-center">
                                    <Image
                                        src={ebclogo}
                                        alt="logo"
                                        width={35}
                                        height={20}
                                    />

                                    <div className="flex flex-col">
                                        <div>
                                            <h2>EBC Mussorie</h2>
                                        </div>
                                        <p className="text-sm">{item.date}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-3">
                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                    <p className="text-black">
                                        {item.subtitle.substring(0, 150)}............
                                    </p>
                                    <p>{item.lastupdate}</p>
                                </div>
                            </Link>
                        </div>
                    ))}


                </div>

            </div>
        </div>
    )
}

export default BlogComponent
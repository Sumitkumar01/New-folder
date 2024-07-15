"use client"
import React from 'react'
import ebclogo from "../../../../public/images/ebclogo.png";
import Image from "next/image";
import Link from "next/link";

import familyadventure from "../../../../public/blog/familyadvanture.webp";
import geopark from "../../../../public/blog/georgepeak.webp";
import blogData from "./data";

const DynamicPage = ({params,data}) => {
     // decodedTitle
  const decodedTitle = decodeURIComponent(params.name.trim()).toLowerCase();

  const category = ["All", ...new Set(blogData.map((item) => item.Category))]

  // Find the blog that matches the title in the URL
  // const Blog = blogData.find(item => 
  //   item.title.trim().toLowerCase() === decodedTitle
  // );


  if (!data) {
    return <div>Blog not found</div>;
  }
  
  return (
    <div className="max-w-[1024px] w-full mx-auto bg-[#BCD0BE] px-4 py-2">
      <div className="flex flex-wrap gap-4 items-center">
        {category.map((item, index) => {
          return (
            <Link
              href={"/blogs"}
              // value={item.Category}
              // onClick={() => {
              //   setCurrentTab(item.Category);
              // }}
              key={index}
              className="hover:bg-[#29422C] px-4 py-1 hover:text-white capitalize"
            >
              {item}
            </Link>
          );
        })}
      </div>

      <div className="mt-6 border flex flex-col gap-4 border-gray-500 px-5 py-8">
        <div href={`/blog/`} className="col-span-3 py-2">
          <div className="flex gap-4 items-center">
            <Image src={ebclogo} alt="logo" width={35} height={20} />

            <div className="flex gap-2">
              <div>
                <h2>EBC Mussorie</h2>
              </div>
              <p>{data.date}</p>
            </div>
          </div>

          <div className="space-y-2 mt-3">
            {/* <h2 className="text-2xl font-bold">{itm.title}</h2>
                <p className="text-black">{itm.subtitle}</p>
                <p>{itm.lastupdate}</p> */}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>

        {data.title2 && data.subtitle2 && (
          <div>
            <h2 className="text-2xl font-bold">{data.title2}</h2>
            <p>{data.subtitle2}</p>
          </div>
        )}

        {data.image && (
          <div className="mt-2">
            <div className="w-full sm:h-[450px] h-[300px]">
              <Image
                src={data.image.src}
                alt="image"
                width={1000}
                height={100}
                className="w-full h-full object-cover "
              />
            </div>

            <p className="text-center mt-4">{data.imgTitle}</p>
          </div>
        )}

        {data.imgItems && (
          <div className="flex flex-col gap-12 mt-4">
            {Blog?.imgItems?.map((item, index) => (
              <div key={index}>
                <p className="text-center mt-4">{item.title}</p>

                <div className="w-full sm:h-[450px] h-[300px] mt-5">
                  <Image
                    src={item.img}
                    alt="image"
                    width={1000}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-center mt-4">{item.subtitle}</p>
              </div>
            ))}
          </div>
        )}

        {data.content?.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <div className="flex flex-col gap-4 mt-2">
                {item?.subtitle?.map((itm, index) => {
                  return (
                    <p key={index} className="text-md">
                      {itm}
                    </p>
                  );
                })}
              </div>

              <ul className="flex flex-col gap-2 list-inside list-disc mt-4">
                {item?.items?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}

        <div className="flex flex-wrap gap-4">
          <Link href={"/"} className="px-4  py-1 border border-gray-400">
            Musssorie
          </Link>
          <Link href={"/"} className="px-4 py-1  border border-gray-400">
            Adventure
          </Link>
          <Link href={"/"} className="px-4 py-1  border border-gray-400">
            Thinks to do
          </Link>
        </div>

        <div className="border-y border-y-gray-400 flex justify-between py-4">
          <div></div>
          <ul className="flex gap-4 list-disc list-inside text-sm">
            <li>EBC</li>
            <li>Activity</li>
            <li>Mussorie</li>
          </ul>
        </div>

        <div className="flex gap-6 text-sm">
          <p>49views</p>
          <p>0 comments</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <p>Recent Posts</p>
          <Link href={"/"}>See All</Link>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-2">
          <div className="border rounded-md border-gray-500">
            <div className="w-full">
              <Image
                src={geopark}
                alt="geopark"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold ">
                George Everest Peak, one of the most Legendary
              </h2>
            </div>

            <div className="bg-gray-600 w-full h-[0.05rem]" />

            <div className="flex gap-8 p-5">
              <p>7</p>
              <p>0 comments</p>
            </div>
          </div>

          <div className="border rounded-md border-gray-500">
            <div>
              <Image
                src={familyadventure}
                alt="family adventure"
                width={600}
                height={400}
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold ">
                Family Adventure: Making Mussoorie a Fun-....
              </h2>
            </div>

            <div className="bg-gray-600 w-full h-[0.05rem]" />

            <div className="flex gap-8 p-5">
              <p>10</p>
              <p>0 comments</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-600 flex justify-center items-center mt-8 p-5">
          <div className="max-w-2xl w-full mx-auto">
            <div className="pb-2 border-b border-b-gray-600">
              <p>Comments</p>
            </div>

            <div>
              <textarea
                name=""
                placeholder="write a comment"
                rows={4}
                className="w-full bg-transparent border border-gray-500 mt-5 p-4"
              />
              <div className="flex justify-end">
                <div className="flex gap-2">
                  <button>Cancel</button>
                  <button className="bg-[#29422C]/40 text-white px-2" disabled>
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicPage
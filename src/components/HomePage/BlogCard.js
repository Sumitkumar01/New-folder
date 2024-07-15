import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";

const BlogCard = ({ data }) => {
  return (
    <Link
      href={data.route}
      className="flex flex-col min-h-[500px] overflow-hidden rounded-sm"
    >
      <div>
        <Image
          loading="lazy"
          src={data.image}
          alt="blog card"
          width={600}
          height={400}
          className="grow w-full aspect-[1.3] max-md:mt-3"
        />
      </div>

      <div className="flex flex-col  max-md:w-full h-full">
        <div className="flex flex-col grow gap-3 px-4 py-4 mx-auto w-full text-xs bg-[#29422C] text-neutral-400">
          <div className="self-start">EBC Mussoorie</div>
          <div className="flex gap-2.5 self-start">
            <div>{data.date}</div>
            <div>{data.time}</div>
          </div>
          <div className=" text-[20px] font-bold leading-8 text-neutral-50">
            {data.heading}
          </div>
          <div className="text-[18px] leading-6">{data.paragraph}</div>
          <div className="shrink-0  h-px bg-[#D5D5D5]" />
          <IoEyeOutline size={20} color="#D5D5D5" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

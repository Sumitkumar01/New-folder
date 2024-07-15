import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="max-w-[1600px] w-full mx-auto h-screen md:max-h-[800px]">
      <div className="bg-cover bg-center bg-no-repeat banner h-full ">
        <div className="maxwidth mx-auto flex justify-end items-center py-20">
          <div className="flex flex-col justify-center p-5 bg-[#29422C] max-w-[365px]">
            <div className="flex flex-col px-4 py-5 border border-solid border-[#D5D5D5]">
              <Image
                loading="lazy"
                src={logo}
                alt="logo"
                width={600}
                height={400}
                className="w-full aspect-[1.67]"
              />
              <div className="mt-7 text-[20px] tracking-wider leading-8 text-center text-[#D5D5D5]">
                Discover Your Mountain Oasis: Experience Luxury Camping at
                Everest Base Camp Mussoorie!
              </div>
              <Link href={"https://live.ipms247.com/booking/book-rooms-everestbasecamp"} target="_blank" className="justify-center self-center px-8 py-2 rounded-sm mt-5 text-base italic leading-6 text-[#29422c] bg-[#D5D5D5]">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Roomscard({ title, subtitle, link, images, accomodation, index, description }) {
  return (
    <div
      className="grid lg:grid-cols-2 grid-cols-1 bg-[#bcd0b8] items-center rounded-lg shadow-inner"
      style={{
        top: `${(index + 1) * 0.8}%`,
      }}
    >
      <div className={`${index % 2 != 0 ? "md:order-2" : ""} h-full`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          speed={900}
          className="w-full h-full"
        >
          {images?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-full overflow-hidden shadow-xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    // width={600}
                    // height={400}
                    fill
                    className="object-cover w-full h-full hover:scale-105 duration-500"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div
        className={`flex flex-col gap-6 px-4 py-6 ${index % 2 == 0 ? "md:order-1" : ""
          }`}
      >
        <h2 className="text-5xl font-semibold text-[#29422C]">{title}</h2>
        <p className="text-xl text-[#063333] ">{description}</p>

        <p className="text-xl text-[#063333] text-justify">{subtitle}</p>

        <div className="grid md:grid-cols-9 grid-cols-5 gap-6 border-y border-y-[#29422c] px-3 py-5">
          {accomodation?.map(
            (item, index) =>
              item.isTrue && (
                <div
                  key={index}
                  className="hover:-translate-y-1 duration-300 transition-all"
                >
                  {item.icon}
                </div>
              )
          )}
        </div>

        <div className="flex">
          <Link
            href={link.href}
            target="_blank"
            className="text-2xl border border-[#29422c] bg-[#29422c] text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-black"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Roomscard;

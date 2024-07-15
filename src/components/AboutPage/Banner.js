"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Banner = ({ data, order }) => {
  return (
    <div className="bg-[#D5D5D5]">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 maxwidth mx-auto">
        <div
          className={`flex flex-col items-start max-md:order-1 ${order === "1" ? "md:order-2" : " "
            } justify-center w-full text-lg max-md:px-3 max-md:max-w-full`}
        >
          <div className=" text-[32px] font-bold text-[#29422C] leading-[57px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            {data.heading}
          </div>
          {data.subheading && (
            <div className="mt-4 leading-7 text-[22px] text-justify text-[#29422C] max-md:max-w-full">
              {data.subheading}
            </div>
          )}
          <div className="mt-4 leading-7 text-justify text-[#29422C] max-md:max-w-full">
            {data.paragraph}
          </div>
          {data.subPara && (
            <div className="mt-4 leading-7 text-justify text-[#29422C] max-md:max-w-full">
              {data.subPara}
            </div>
          )}
          {/* <Link href={""} className="flex justify-center px-8 py-2 mt-8 rounded-sm font-semibold tracking-normal text-white bg-[#29422C] leading-[144%] max-md:ml-2.5">
                        Discover More
                    </Link> */}
        </div>
        <div className=" flex flex-col max-md:w-full">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              el: "#bullets-Portfolio",
            }}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            breakpoints={
              {
                // 768: {
                //     slidesPerView: ,
                //     spaceBetween: 20,
                // },
                //   1024: {
                //     slidesPerView: 3,
                //     spaceBetween: 20,
                //   },
              }
            }
            className="w-full h-full"
          >
            {data.images?.map((roomImage, index) => {
              return (
                <SwiperSlide key={index} className="">
                  <Image
                    src={roomImage}
                    className="w-full md:h-[460px] h-[280px] object-cover"
                    alt="roomImage"
                  // width={600}
                  // height={400}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;

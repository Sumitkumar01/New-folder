"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import indoor1 from "../../../public/activity/activity3.png"
import indoor2 from "../../../public/activity/activity4.png"
import indoor3 from "../../../public/activity/boardgame.jpg"

import Image from "next/image";
const IndoorActivities = () => {
  const images = [indoor1, indoor2, indoor3];
  return (
    <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 overflow-hidden w-full">
      <div className="flex flex-col gap-5  items-center">
        <h2 className="text-[42px] max-md:text-center text-white font-medium leading-[45px]">
          Indoor Activities
        </h2>
        <p className=" text-center max-md:text-justify text-white">
          Explore our diverse range of board games perfect for a cosy indoor
          adventure. Join us for a relaxing day of strategic fun and friendly
          competition.
        </p>
      </div>

      {/* <div className="w-full rounded-lg overflow-hidden"> */}
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
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          //   1024: {
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
        }}
        className="w-full h-[250px] md:h-[500px] rounded-sm"
      >
        {images?.map((roomImage, index) => {
          return (
            <SwiperSlide key={index} className="">
              <Image
                src={roomImage}
                className="h-full object-cover"
                alt="roomImage"
              // width={600}
              // height={400}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default IndoorActivities;

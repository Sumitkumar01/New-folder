"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import insta4 from "../../../public/Instagram/02 Breakfast-min.jpg";
import insta1 from "../../../public/Instagram/08 Facade-min.jpg";
import insta2 from "../../../public/Instagram/DJI_0378-min.JPG";
import insta3 from "../../../public/Instagram/36 Dining_11zon.jpg";
import Image from "next/image";
import Link from "next/link";

const BottomGallery = () => {
  const data = [insta1, insta2, insta3, insta4];
  return (
    <div className="w-full overflow-hidden  ">
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
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full h-[400px]"
      >
        {data.map((roomData, index) => {
          return (
            <SwiperSlide key={index} className="h-[100%]">
              <Image
                src={roomData}
                alt={`img${index}`}
                className="h-[100%] object-cover"
                fill
              // width={600}
              // height={400}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center mt-8">
        <Link href={"https://www.instagram.com/ebcmussoorie/"} target="_blank" className="px-8 py-1 bg-[#D5D5D5] rounded-sm text-[20px]">
          Instagram
        </Link>
      </div>
    </div>
  );
};

export default BottomGallery;

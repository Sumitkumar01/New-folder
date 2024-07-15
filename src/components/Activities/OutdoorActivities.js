"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import OutdoorActivitiesCard from "./OutdoorActivitiesCard";
import activity1 from "../../../public/activity/activity2.png";
import activity2 from "../../../public/activity/activity_3.jpg";


import Image from "next/image";
const OutdoorActivities = () => {
  const Images = [activity1, activity2];
  return (
    <div className="maxwidth mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-5 max-md:px-3">
      <div className="max-md:order-2">
        <OutdoorActivitiesCard />
      </div>

      <div className="w-full md:col-span-2 md:h-[500px]">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          pagination={{
            el: "#bullets-Portfolio",
          }}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            //   1024: {
            //     slidesPerView: 3,
            //     spaceBetween: 20,
            //   },
          }}
          className="w-full h-full"
        >
          {Images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt="outdoor"
                  className="h-full object-cover"
                  fill
                // width={600}
                // height={400}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OutdoorActivities;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const SpecilizationCard = ({ cardData, index }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div
        className={`overflow-hidden max-md:order-1 ${index === 1 || index === 3 ? "order-2" : ""
          }`}
      >
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
          className="relative h-[480px] max-md:h-[300px]"
        >
          {cardData?.images?.map((roomImage, index) => {
            return (
              <SwiperSlide key={index} className="">
                <Image
                  src={roomImage}
                  className="h-full w-full object-cover"
                  alt={`Room image ${index}`}
                // fill
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex flex-col justify-center bg-[#D5D5D5] p-3 md:px-10 md:py-24">
        <div className="w-full text-3xl text-[#29422C] font-semibold tracking-wider leading-8 max-md:max-w-full">
          {cardData.heading}
        </div>
        <div className="mt-6 text-[20px] w-full text-[#29422C] leading-7 text-justify max-md:max-w-full">
          {cardData.para}
        </div>
        {cardData.button && (
          <Link href={"https://live.ipms247.com/booking/book-rooms-everestbasecamp"} target="_blank" className="justify-center self-start px-8 py-2 mt-6 text-lg font-medium tracking-normal text-white bg-[#29422C] rounded-sm leading-[144%]">
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default SpecilizationCard;

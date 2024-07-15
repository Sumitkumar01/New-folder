"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const ActivitiesCard = ({ activitiesData, index }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-[#D5D5D5] rounded-sm min-h-[400px] ">
      <div
        className={`col-span-2  ${index === 1 || index === 3 ? "order-2" : ""}`}
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
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            // 1024: {
            //     slidesPerView: 3,
            //     spaceBetween: 20,
            // },
          }}
          className="w-full h-full"
        >
          {activitiesData?.images?.map((roomImage, index) => {
            return (
              <SwiperSlide key={index} className="rounded-sm overflow-hidden">
                <Image
                  src={roomImage}
                  alt="roomImage"
                  className="h-full object-cover"
                  width={600}
                  height={400}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex flex-col justify-center text-lg bg-[#D5D5D5] py-5">
        <div className="w-full text-3xl text-[#29422C] font-semibold tracking-wider leading-8 max-md:max-w-full">
          {activitiesData.heading}
        </div>
        <div className="mt-6 text-[20px] w-full text-[#29422C] leading-7 text-justify max-md:max-w-full">
          {activitiesData.para}
        </div>
        {/* <button className="justify-center self-start px-5 py-1 mt-6 font-medium tracking-normal text-white bg-[#29422C] rounded-sm leading-[144%]">
                    Book Now
                </button> */}
      </div>
    </div>
  );
};

export default ActivitiesCard;

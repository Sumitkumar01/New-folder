"use client";
import React from "react";
import RoomSwiperCard from "./RoomSwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Rooms1 from "../../../public/rooms/Glamper 1 Bedroom pic 1.jpg"
import Rooms2 from "../../../public/rooms/Camper Bedroom Pic 3.jpg"
import Rooms3 from "../../../public/rooms/Suite Bedroom 1.jpg"
import Rooms4 from "../../../public/rooms/Surevyor Bedroom pic 2.jpg"

const RoomSwiper = () => {
  const Roomdata = [
    {
      image: Rooms1,
      roomName: "The Glamper",
      description:
        " Our Glamper rooms promise relaxation and rejuvenation like no other, ideal for small groups, making unforgettable moments on our exclusive netted balcony space, perfect for creating Instagram-worthy memories.",
    },
    {
      image: Rooms2,
      roomName: "The Clamper",
      description:
        "Treat yourself to a relaxing getaway in our Camper rooms, perfect for couplesseeking a lavish vacation experience, providing unparalleled comfort and coziness in a peaceful setting.",
    },
    {
      image: Rooms3,
      roomName: "The Surveyor",
      description:
        "Experience luxury in our Surveyor Suite at Everest Base Camp, Mussoorie. Enjoy spacious tents, stunning forest views, and a king-sized bed. Perfect for families or friends.",
    },
    {
      image: Rooms4,
      roomName: "The Surveyor Suite",
      description:
        "Relax and recharge in the peaceful Surveyor rooms, surrounded by Deodar forest scenery. Perfect for families or small groups, our serene atmosphere ensures privacy and comfort, allowing you to reconnect with nature.",
    },
  ];
  return (
    <div className="maxwidth mx-auto flex flex-col justify-between max-md:px-3 md:flex-row w-full ">
      <div className="w-full md:w-[60%]">
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
          className="w-full"
        >
          {Roomdata.map((roomData, index) => {
            return (
              <SwiperSlide key={index}>
                <RoomSwiperCard key={index} roomData={roomData} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="w-full md:w-[40%] flex flex-col justify-center items-center text-white">
        <h1 className="text-[52px] text-center font-semibold">Our Rooms</h1>
        <p className="text-[26px] text-center">
          glamping and
          <br />
          Comfort Redefined
        </p>
      </div>
    </div>
  );
};

export default RoomSwiper;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const Momories = () => {
  const image = [
    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/Tent/_MG_2369.JPG",
    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/Z1/DSC_6143.jpg",
    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/Glamper+Room/_MG_2556.JPG",
    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Surveyor+room/cda949b0-cc7a-44de-98f9-8c09ef920fbc.jpg",
    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/Surveyor+Suite+Room/_MG_2605.JPG",
  ];
  return (
    <div className="flex flex-col items-center py-10 bg-[#D5D5D5] max-md:px-3">
      <div className="flex flex-col max-w-full md:w-[880px]">
        <div className="self-center text-2xl font-bold leading-6 text-center text-[#29422C] md:w-[374px]">
          &quot;Stay with a lifetime of memories with EBC Mussoorie&quot;
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 max-md:flex-wrap max-md:max-w-full">
          <div className="md:w-[300px] h-[500px] md:h-[500px] rounded-3xl border-[10px] border-black  flex items-start justify-start">
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                //   1024: {
                //     slidesPerView: 3,
                //     spaceBetween: 20,
                //   },
              }}
              className="w-full h-full "
            >
              {image.map((roomData, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={roomData}
                      alt="slider"
                      fill
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex flex-col self-stretch my-auto text-base">
            <div className="text-[18px] leading-6 text-justify text-[#29422C]">
              {`Each of our five spacious rooms has a distinctive and quirky feel
                            inspired by nature. Equipped with top-of-the-range bed and bath
                            fittings, the rooms provide uninterrupted views of the hill ranges
                            and lush forests. A long corridor adjoining the rooms and a cozy
                            patio overlooking the jungle provide ample space to relax and
                            unwind. Come experience a songbird wake-up call and immerse
                            yourself in nature's tranquility at our resort.`}
            </div>
            <Link
              href={"/rooms"}
              className="flex justify-center self-center px-8 py-2 rounded-sm mt-9 italic bg-[#29422C] leading-[140%] text-[#D5D5D5]"
            >
              Our Rooms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Momories;

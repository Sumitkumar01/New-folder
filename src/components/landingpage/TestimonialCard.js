"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import star from "../../../public/images/start.svg";
const TestimonialCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TestimonialData = [
    {
      text: "The resort surprised us with its well-maintained facilities. Our room was clean and comfortable, a perfect haven after a day of exploring the George Everest trek . Even though we were nestled in the hills, they had everything we needed for a relaxing stay.",
      name: "Ronu Kumar",
    },
    {
      text: "The trip was amazing ! I didn’t expect that a glamping resort could be this amazing. I would give my special thanks to Mahir and his team for making sure all our needs were met. I thoroughly enjoyed my stay at the glamping resort.",
      name: "Radhika S",
    },
    {
      text: "Tucked away in a quiet forest, untouched by the loud noises and bright lights of the city, here is a window to the long lost charm of Mussoorie.",
      name: "Hansdhwani G",
    },
    {
      text: `The resort offers a unique twist on lodging. Imagine staying in luxurious tents nestled amongst the mountains. Don't be fooled by the word "rustic" though. These tents are surprisingly well-equipped, providing all the comforts you'd expect, like heated blankets and even en-suite bathrooms`,
      name: "Aryan Kurmi",
    },
  ];
  return (
    <div className="flex flex-col px-11 py-3 rounded-sm bg-[#D5D5D5] bg-opacity-70 max-w-[610px] max-md:w-full max-md:px-5">
      <div className="self-center text-5xl font-bold text-center text-[#29422C] leading-[56.16px] max-md:text-4xl">
        Testimonials
      </div>
      <div className="mt-4 text-lg leading-7 text-center text-[#29422C] max-md:max-w-full">
        {" "}
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliqu.
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          el: "#bullets-Portfolio",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
        {TestimonialData.map((data, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="flex flex-col justify-center px-2.5 py-4 mt-3 bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-2 max-md:flex-wrap">
                  {/* <div className="flex gap-1 self-start">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/58e9ab03b5b29dc74710d7063b7350c7967648676364b11de1c651dd3a122198?"
                                            className="shrink-0 w-5 aspect-[0.63] fill-[#29422C] "
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68a7126518b574c205af5adf0fb4f195088fe0ef287b4d9eeada8c643c7cc945?"
                                            className="shrink-0 w-5 aspect-[0.63] fill-[#29422C]"
                                        />
                                    </div> */}
                  <div className="flex flex-col items-center max-md:max-w-full">
                    <div className="self-stretch text-lg leading-7 text-center text-[#29422C] max-md:max-w-full">
                      <span className="">{data.text}...</span>
                      <Link
                        href={""}
                        className="font-bold text-[#29422C] underline"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="flex gap-1 mt-3">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <Image
                          alt="image"
                          key={index}
                          loading="lazy"
                          src={star}
                          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5ad73c4ed989f30fafc7d18f2563595f5629a7d6ee837a82835c0fba8c06c1?"
                          className="shrink-0 w-4 aspect-square fill-[#29422C]"
                          width={600}
                          height={400}
                        />
                      ))}
                    </div>
                    <div className="mt-3 text-lg font-bold leading-6 text-center text-[#29422C]">
                      {data.name}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex gap-2 items-center self-center mt-3">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            className={`shrink-0 self-stretch ${
              index === activeIndex
                ? "w-3 h-3 bg-[#29422C]"
                : "w-3 h-3 border border-[#29422C]"
            } rounded-full`}
          />
        ))}
      </div>
      {/* <div className="flex gap-2 items-center self-center mt-6">


                {
                    [1, 2, 3, 4, 5].map((roomImage, index) => (

                        {if not current slide? <div id="bullets-Portfolio" className="shrink-0 self-stretch my-auto w-3 h-3 rounded-full border border-[#29422C] border-solid stroke-[0.5px]" />
                        :
                        <div className="shrink-0 self-stretch w-4 h-4 bg-[#29422C] rounded-full" />


                    ))
                }
            </div> */}
    </div>
  );
};

export default TestimonialCard;

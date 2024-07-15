"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OurCuisine = ({ images }) => {
    return (
        <div className="bg-[#BCD0B8] py-12">
            <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 overflow-hidden w-full ">
                <div className="flex flex-col gap-5  items-center">
                    <h2 className="text-[42px] max-md:text-center text-[#29422C] font-medium leading-[45px]">
                        Our Cuisine
                    </h2>
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
                    className="w-full"
                >
                    {images?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="">
                                <Image
                                    alt="image"
                                    src={item.img}
                                    width={600}
                                    height={400}
                                    className="md:h-[360px] object-cover"
                                />
                                <h2 className="text-center capitalize mt-2 text-2xl">
                                    {item.title}
                                </h2>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                {/* </div> */}

                <div className=" flex justify-center mt-5">
                    <Link className="bg-[#29422C] text-white px-4 py-2" href={"/"}>
                        Download menu
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurCuisine
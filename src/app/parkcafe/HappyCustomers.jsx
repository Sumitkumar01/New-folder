"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HappyCustomers = ({ testimonal }) => {
    return (
        <div className="py-12 px-6">
            <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 overflow-hidden w-full ">
                <div className="flex flex-col gap-5  items-center">
                    <h2 className="text-[42px] max-md:text-center text-white font-medium leading-[45px]">
                        Happy Customers!
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
                    {testimonal?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="">
                                <div className="bg-[#bcd0b8] p-5">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            width={600}
                                            height={400}
                                            src={item.img}
                                            alt={`testimonal${index}`}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />

                                        <h2 className="text-center capitalize mt-2 text-lg">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className="text-lg mt-4">{item.subtle}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                {/* </div> */}
            </div>
        </div>
    )
}

export default HappyCustomers
import Image from "next/image";
import React from "react";
import Grid1 from "../../../public/landingpage/23 Facade_11zon.jpg";
import Grid2 from "../../../public/landingpage/00 Cover_11zon.jpg";
import Grid3 from "../../../public/images/30 Games area_11zon.jpg";
import Grid4 from "../../../public/images/01 Picnic_11zon.jpg";
import Grid5 from "../../../public/landingpage/Surevyor Facade.jpg";
import Link from "next/link";

const Grid = () => {
  return (
    <div className="maxwidth mx-auto secBack ">
      <div className="flex flex-col lg:flex-row p-3 gap-3   ">
        <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3    ">
          <div className=" ">
            <Image
              src={Grid1}
              alt="bonfire"
              className="h-full object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="">
            <Image
              src={Grid2}
              alt="bonfire"
              className="h-full object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="md:row-span-2 ">
            <Image
              src={Grid3}
              alt="bonfire"
              className="h-full object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className=" ">
            <Image
              src={Grid4}
              alt="bonfire"
              className="h-full object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="  ">
            <Image
              src={Grid5}
              alt="bonfire"
              className="h-full object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div className="w-full lg:w-[30%] flex flex-col gap-4">
          <h1 className="text-[42px] font-medium text-center leading-[45px] md:px-5 text-[#29422C]">
            Relax & Rejuvenate with us at Everest Base Camp!
          </h1>

          <p className="text-[20px] text-[#29422c] text-justify">
            {`Escape the urban chaos and embrace a tranquil retreat in nature's embrace. Join us for a unique glamping experience that transcends the ordinary. Immerse yourself in the serenity of the great outdoors, where city stress fades away, replaced by the soothing symphony of rustling leaves and chirping birds. Be our guest, unwind, and rediscover the joy of simplicity. It's time to trade skyscrapers for star-studded skies. Your adventure in nature awaits – let the relaxation begin!`}
          </p>

          <div>
            <Link href={"#contact"} className="px-5 py-1 bg-[#29422C] text-[#acacac] rounded-sm">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;

import React from "react";
import c1 from "../../../public/images/01 Picnic_11zon.jpg";
import img1 from "../../../public/images/eventpageimg.png";
import img2 from "../../../public/images/pasta.jpg";
import img3 from "../../../public/images/girlwithshampion.jpg";
import img4 from "../../../public/images/salad.jpg";
import img5 from "../../../public/images/tent.jpg";
import img6 from "../../../public/images/coupleparty.jpg";

import Image from "next/image";
const InstaGrid = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="max-w-[1600px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:px-0 px-4 sm:gap-0 gap-2">
      {images?.map((roomImage, index) => {
        return (
          <Image
            key={index}
            src={roomImage}
            className="h-full object-cover"
            alt={`room${index}`}
            width={600}
            height={400}
          />
        );
      })}
    </div>
  );
};

export default InstaGrid;

import React from "react";

const GeorgeEverest = () => {
  const textData = [
    {
      heading: "Field notes about Sir George Everest",
      paragraph:
        "Nestled amidst the serene beauty of Mussoorie lies our resort, just a short walk away from the iconic George Everest House. Sir George Everest, the legendary Surveyor General of India, once resided here during his historic journey. Today, his legacy lives on through the towering peak of Mount Everest, named in his honor. At our camp, we pay homage to Sir George Everest's remarkable contributions through our name and our commitment to preserving the beauty of nature that surrounds us. Join us in experiencing the wonder of Mussoorie and the rich history that lies within its embrace.",
    },
    {
      heading: "For the next few lazy days and cozy nights",
      paragraph:
        "Get ready to experience the best of both worlds with our glamorous camping. We've carefully curated a luxurious indoor experience that blends perfectly with the wild outdoors. Our tents are fully equipped with all the modern amenities and decorated with a mix of modern and rustic interiors, creating a unique and comfortable atmosphere. Get in touch with your wild side, clad in comfortable jungle wear, and immerse yourself in the natural beauty of the surroundings. Get ready to roar like a wolf and snore like a lion, as you indulge in the ultimate glamping experience at EBC Mussoorie.",
    },
  ];
  return (
    <div className="max-w-[880px] mx-auto py-10 max-md:px-3">
      <div className="flex flex-col gap-10">
        {textData?.map((data, index) => (
          <GeorgeEverestComp key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

const GeorgeEverestComp = ({ data }) => {
  return (
    <div className="">
      <div className=" text-[32px] font-bold text-center text-[#D5D5D5] leading-[57px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        {data.heading}
      </div>
      <div className="mt-4 leading-7 text-center text-[#D5D5D5] max-md:max-w-full">
        {data.paragraph}
      </div>
    </div>
  );
};

export default GeorgeEverest;

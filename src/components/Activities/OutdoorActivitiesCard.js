import Link from "next/link";
import React from "react";

const OutdoorActivitiesCard = () => {
  return (
    <div className="flex flex-col justify-center bg-[#D5D5D5] px-3 py-5 md:px-10 min-h-[500px]">
      <div className="w-full text-3xl text-[#29422C] font-semibold tracking-wider leading-8 max-md:max-w-full">
        Outdoor Activities
      </div>
      <div className="mt-6 text-[20px] w-full text-[#29422C] leading-7 text-justify max-md:max-w-full">
        {`     Discover thrilling outdoor activities like badminton, archery, mountain biking, and hooping. Join the brave for haunted walks around the campsite or witness the stunning sunrise at Mussoorie's Lal Tibba. For a unique challenge, partake in a momo-eating contest and unite with fellow birdwatchers at Benog Wildlife Sanctuary. Explore numerous hikes and trails for an unforgettable adventure.`}
      </div>

      <Link href={"https://live.ipms247.com/booking/book-rooms-everestbasecamp"} target="_blank" className="justify-center self-start px-8 py-2 mt-6 text-lg font-medium tracking-normal text-white bg-[#29422C] rounded-sm leading-[144%]">
        Book Now
      </Link>
    </div>
  );
};

export default OutdoorActivitiesCard;

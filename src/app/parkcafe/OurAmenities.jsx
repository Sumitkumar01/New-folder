"use client"

import { usePathname } from "next/navigation"

const OurAmenities = () => {
    const pathname = usePathname()
    return (
        <>
            {pathname === "/landingpage" && (
                <div className="flex flex-col gap-5  items-center">
                    <h2 className="text-[42px] max-md:text-center text-white font-medium leading-[45px]">
                        OUR AMENITIES
                    </h2>
                    <p className=" text-center max-md:text-justify text-white">
                        Experience luxury amidst the serene hills at Everest Base Camp
                        with a range of to choose from, including a fine dining
                        restaurant, outdoor activities, and luxury accommodations, we
                        provide the perfect escape from the hustle and bustle of everyday
                        life.
                    </p>
                </div>
            )}
        </>
    )
}

export default OurAmenities
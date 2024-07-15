import React from 'react'


import Picnic1 from "../../../public/picnic/_MG_0636.JPG"
import Picnic2 from "../../../public/picnic/_MG_1465.JPG"
import Picnic3 from "../../../public/picnic/IMG_0620.JPG"
import Picnic4 from "../../../public/picnic/_MG_2878.JPG"


import BBQ1 from "../../../public/images/Barbecue1.webp"
import BBQ2 from "../../../public/images/34 Barbeque_11zon.jpg"
import BBQ3 from "../../../public/images/about1.jpg"


import BornFire1 from "../../../public/bornfire/dji_fly_20230402_033354_140_1680447488677_photo.jpg"
import BornFire2 from "../../../public/bornfire/bornfire.jpg"
import BornFire3 from "../../../public/bornfire/bornfire.png"
import BornFire4 from "../../../public/bornfire/38 Bonfire_11zon.jpg"



import Wilderness1 from "../../../public/bornfire/33 Bonfire_11zon.jpg"
import Wilderness2 from "../../../public/bornfire/treking.png"

import SpecilizationCard from '../landingpage/SpecilizationCard'

const AddOn = () => {

    const datas = [
        {
            "heading": "Picnic in the Meadows!",
            "para": "Enjoy a peaceful picnic amidst the beauty of nature, with a basket brimming with delightful snacks and refreshing beverages. Our idyllic property offers the ideal setting for a relaxing afternoon, spent cherishing moments with friends and family.",
            "images": [Picnic1, Picnic2, Picnic3, Picnic4],
            "button": true
        },
        {
            "heading": "Gather Together for a Barbecue",
            "para": "Join us for an enchanting evening of grilling under the stars. Surrounded by the tranquil beauty of our property, enjoy a memorable night filled with warmth and camaraderie. As the fire crackles, savour a delightful array of your favourite grilled meats and vegetables, creating the perfect backdrop for relaxation and connection with family and friends.",
            "images": [BBQ1, BBQ2, BBQ3],
            "button": true
        },
        {
            "heading": "Bonfire",
            "para": "Experience the magic of a private bonfire under the starlit sky, creating cherished moments with your loved ones. Unwind after exploring Mussoorie's natural beauty in the warmth of your own intimate setting, fostering both adventure and relaxation.",
            "images": [BornFire1, BornFire2, BornFire3, BornFire4],
            "button": true
        },
        {
            "heading": "Trekking",
            "para": "Embark on the George Everest Peak trek amidst Mussoorie's serene hills, with our knowledgeable guide providing direction and companionship along the way. Enjoy a refreshing sandwich, tea, and water as you explore hidden gems and breathtaking Himalayan views.Experience the perfect blend of adventure and comfort with luxury camping amidst nature's beauty.",
            "images": [Wilderness1, Wilderness2],
            "button": true
        },
    ]

    return (
        <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 ">
            <div className="flex flex-col gap-5  items-center">
                <h2 className="text-[42px] max-md:text-center text-white font-medium leading-[45px]">Paid Add-ons</h2>
                {/* <p className=" text-center max-md:text-justify text-white">Experience luxury amidst the serene hills at Everest Base Camp with a range of
                to choose from, including a fine dining restaurant, outdoor activities, and luxury accommodations,
                we provide the perfect escape from the hustle and bustle of everyday life.</p> */}
            </div>

            <div className="rounded-lg overflow-hidden">
                {
                    datas.map((data, index) => (
                        <SpecilizationCard key={index} cardData={data} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default AddOn
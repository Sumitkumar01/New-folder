import React from 'react'
import c1 from "../../../public/images/glampers1.webp"
import Image from 'next/image'
const Section = () => {

    const para = [
        "If the sun decides to show off on any particular day, some sunscreen and a sun hat will take you a long way.",
        "Please carry a pair of sports shoes that are suited for the terrain you’ll be surrounded by. Waterproof shoes are recommended.",
        "Our tents prefer slippers over shoes. Don’t you too? Don’t forget to carry a pair.",
        "The temperature tends to drop in the evenings, no matter what season it is. Carry woollens to keep yourself warm. We’ll get the bonfire burning for added heat outside the tents.",
        "If you are visiting us during the monsoon, please keep a raincoat and gumboots handy. Splish, splash, swoosh!",
        "In case the mountains can’t feed your electronics with electricity 24/7, you would need a power back-up for them. Please carry one with you.",
        "See you on the hillside!"
    ]
    return (
        <div className=' bg-[#D5D5D5]'>
            <div className='max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 py-5 px-5'>
                <div className=''>
                    <Image src={c1} alt="checklist" className="h-full w-full" />
                </div>
                <div>
                    {para.map((p, index) => (
                        <p key={index} className='mt-6 text-[20px] w-full text-center text-[#29422C] leading-7 max-md:max-w-full'>
                            {p}
                        </p>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Section
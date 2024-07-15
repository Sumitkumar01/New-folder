import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col items-center px-3 text-lg leading-6 text-white mx-auto max-w-[880px]">
            <div className="text-[32px] tracking-wider text-center">/ˈɡlampɪŋ/</div>
            <div className="mt-8 text-justify leading-[180%] max-md:max-w-full">
                &quot;a type of camping that is more comfortable and luxurious than
                traditional camping&quot;
            </div>
            <div className="self-stretch mt-5 w-full leading-8 text-center max-md:max-w-full">
                Everest Base Camp is a luxury camping resort that embodies the legacy of
                Sir George Everest, a former Surveyor General of India, and is an ode to
                his adventures that unfolded in the charming town of Mussoorie.
            </div>
            <Link href="/about" className="justify-center items-center px-8 py-2 mt-10 max-w-full text-base italic text-[#29422C] bg-[#D5D5D5] max-md:mt-10">
                About Us
            </Link>
        </div>
    )
}

export default About
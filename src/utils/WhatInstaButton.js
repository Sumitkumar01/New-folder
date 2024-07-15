import Link from 'next/link'
import React from 'react'

import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const WhatInstaButton = ({ button, link }) => {
    return (
        <div className='flex justify-center md:mt-10'>

            {button === "whatsapp" ?
                <Link href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-5 self-start px-8 py-2 text-lg font-medium tracking-normal  text-[#29422C] bg-[#D5D5D5] rounded-sm leading-[144%]">
                    <FaWhatsapp size={24} color='#29422C' />
                    WhatsApp
                </Link>
                :
                button === "insta" ?
                    <Link href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-5 self-start px-8 py-2 text-lg font-medium tracking-normal  text-[#29422C] bg-[#D5D5D5] rounded-sm leading-[144%]">
                        <FaInstagram size={24} color='#29422C' />
                        Instagram
                    </Link>
                    :
                    ""
            }

        </div>

    )
}

export default WhatInstaButton
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Link from 'next/link';
import { Face, Insta, Trip } from '../../icons/icons';

const Form = () => {
    return (
        <div className="w-full md:w-[1280px] mx-auto py-5 rounded-sm bg-[#D5D5D5]" id="contact">
            <div className="text-center text-5xl font-bold text-[#29422C] capitalize leading-[56.16px] ">
                Contact Us
            </div>
            <div className=" flex w-full gap-5 max-md:flex-col max-md:gap-0 px-3 md:px-10">
                <div className="flex flex-col w-full md:w-[60%]">
                    <div className="flex flex-col grow text-lg leading-7 text-[#29422C] max-md:mt-10 max-md:max-w-full">
                        <div className="text-3xl font-semibold tracking-wide leading-8 capitalize max-md:max-w-full">
                            Contact Details
                        </div>
                        <div className="flex gap-3 mt-6 max-md:flex-wrap">
                            <FaLocationDot size={25} />
                            <div className="max-md:max-w-full">
                                Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                                Mussoorie, Uttarakhand, 248179
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 justify-between self-start mt-4">
                            <Link href={"tel:+918595274861"} className="flex items-center gap-3">
                                <FaPhone size={16} color='#29422C' />
                                <div>+91 85952 74861</div>
                            </Link>
                            <Link href={"mailto:info@ebcmussoorie.com"} className="flex items-center gap-2.5 self-start mt-1 whitespace-nowrap">
                                <MdEmail size={18} color='#29422C' />
                                <div>info@ebcmussoorie.com</div>
                            </Link>
                        </div>


                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d6878.363293193037!2d78.025305!3d30.4592927!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3908d170d61d91cb%3A0x84607e0d71c4450f!2sEverest%20Base%20Camp%2C%20Near%20George%20Everest%20House%20George%20Everest%20House%2C%205km%20from%20Mall%20Park%20Estate%20Hathi%20paon%20Road%2C%20Mussoorie%2C%20Uttarakhand%20248179!3m2!1d30.4592927!2d78.025305!5e0!3m2!1sen!2sin!4v1716280506901!5m2!1sen!2sin"
                            className='w-full h-[300px] mt-5'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-[40%]" >
                    <div className="flex flex-col grow justify-center max-md:mt-10">
                        <div className="flex flex-col px-6 py-7 rounded-sm blur-none bg-black bg-opacity-30 max-md:px-5">
                            <div className="text-2xl font-semibold leading-7 text-[#29422C]">
                                Get in Touch!
                            </div>
                            <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-5 w-full bg-white rounded-sm max-md:pr-5">
                                <div className="flex gap-3 w-full">
                                    <div className="my-auto text-base font-black leading-7 text-[#29422C]">
                                        <FaUser size={18} color='#29422C' />
                                    </div>
                                    <input placeholder='Name*' className="text-lg leading-6 w-full outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-5 w-full bg-white rounded-sm max-md:pr-5">
                                <div className="flex gap-3 w-full">
                                    <div className="my-auto text-base font-black leading-7 text-[#29422C]">
                                        <FaPhone size={18} color='#29422C' />
                                    </div>
                                    <input placeholder='Phone*' className="text-lg leading-6 w-full  outline-none" />

                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-4 w-full whitespace-nowrap bg-white rounded-sm max-md:pr-5">
                                <div className="flex gap-3 w-full">
                                    <div className="my-auto text-base font-black leading-7 text-[#29422C]">
                                        <MdEmail size={18} color='#29422C' />
                                    </div>
                                    <input placeholder='Email*' className="text-lg leading-6 w-full  outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start px-4 py-3.5 mt-4 w-full whitespace-nowrap bg-white rounded-sm max-md:pr-5">
                                <div className="flex justify-start items-start gap-3 w-full">
                                    <div className="flex justify-start items-start text-base font-black leading-7 text-[#29422C]">
                                        <IoIosSend size={20} color='#29422C' />
                                    </div>
                                    <textarea placeholder='Queries*' className="text-lg leading-6 w-full  outline-none" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center px-7 py-3.5 mt-5 text-lg font-medium leading-6 whitespace-nowrap bg-green-900 rounded-sm text-stone-300 max-md:px-5">
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-5 w-full mt-10">
                <Link href={"https://www.facebook.com/ebcmussoorie/"} target="_blank"> <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Face />
                </div></Link>
                <Link href={"https://www.instagram.com/ebcmussoorie/"} target="_blank">  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Insta />
                </div></Link>
                <Link href={"https://www.facebook.com/ebcmussoorie/"} target="_blank"><div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Trip />
                </div></Link>
            </div>

        </div>
    );
}

export default Form
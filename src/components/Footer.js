"use client";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import { Face, Insta, Trip } from "../icons/icons";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/landingpage" ? (
        <div className="flex flex-col py-10">
          <div className="self-center max-md:px-3 w-full max-w-[1280px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-[#D5D5D5] max-md:mt-10">
                  <div className="text-[22px] font-medium leading-8">
                    Everest Base Camp Mussoorie
                  </div>
                  <div className="mt-6 text-[20px] tracking-wider leading-8 max-md:mt-10">
                    Discover Your Mountain Oasis: Experience Luxury Camping at
                    Everest Base Camp Mussoorie!
                  </div>
                  <div className="flex mt-6 gap-3 my-auto">
                    <Link
                      href={"https://www.facebook.com/ebcmussoorie/"}
                      target="_blank"
                    >
                      <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                        <Face />
                      </div>
                    </Link>
                    <Link
                      href={"https://www.instagram.com/ebcmussoorie/"}
                      target="_blank"
                    >
                      <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                        <Insta />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col tracking-wider text-[#D5D5D5] max-md:mt-10">
                  <div className="text-[22px] font-medium leading-8">
                    Important Links
                  </div>
                  <div className="flex flex-col mt-6 text-[20px] leading-8 max-md:mt-10">
                    <Link href="">About Us</Link>
                    <Link href=""> Activities Contact</Link>
                    <Link href="">Our Rooms Gallery</Link>
                    <Link href="">Park Cafe</Link>
                    <Link href="">{`A Glamper's Guide`}</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-[20px] font-medium text-[#D5D5D5] max-md:mt-10">
                  <div className="text-[22px] tracking-wider leading-8">
                    Reach Out
                  </div>
                  <div className="flex items-start gap-3.5 mt-6 leading-8 max-md:mt-10">
                    <FaLocationDot size={28} className="mt-1" />
                    <div className="flex-auto">
                      Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                      Mussoorie, Uttarakhand, 248179
                    </div>
                  </div>
                  <Link
                    href={"tel:+918595274861"}
                    className="flex  items-center gap-3.5 mt-5 tracking-wider whitespace-nowrap leading-[145%]"
                  >
                    <MdCall size={20} />
                    <div className="flex-auto my-auto">+91-8595274861</div>
                  </Link>
                  <Link
                    href="https://www.google.com/maps/place/Everest+Base+Camp,+Near+George+Everest+House/@30.4592973,78.0227301,17z/data=!3m1!4b1!4m9!3m8!1s0x3908d170d61d91cb:0x84607e0d71c4450f!5m2!4m1!1i2!8m2!3d30.4592927!4d78.025305!16s%2Fg%2F11fp31k5lj?hl=en&entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center px-8 py-2 mt-5 text-base rounded-sm leading-6 text-center text-[#29422C] bg-[#D5D5D5] max-md:px-5"
                  >
                    Get Direction On Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 py-5 mt-9">
            <div className="flex gap-5 max-w-[1280px] mx-auto justify-between  w-full text-sm tracking-wider leading-4 text-white  max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-2">
                <div className="flex-auto">&#169;Copyright content here</div>
              </div>
              <div className="flex gap-5 justify-between self-start whitespace-nowrap">
                <div>COMPLIANCE</div>
                <Link href={"/privacy"}>PRIVACY</Link>
                <Link href={"/terms"}>TERMS</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col py-10">
          <div className="flex justify-between gap-20  maxwidth mx-auto max-md:flex-wrap max-md:max-w-full  px-5">
            <div className="flex flex-col md:w-[39%] w-full">
              <div className="flex flex-col  text-white max-md:mt-10 max-md:max-w-full">
                <div className="w-full flex justify-center">
                  <Image
                    loading="lazy"
                    src={Logo}
                    alt="logo"
                    style={{ width: "218px", height: "100%" }}
                    className="self-center max-w-full "
                  />
                </div>
                <div className="mt-4 text-3xl font-bold tracking-wider leading-10 max-md:max-w-full">
                  Everest Base Camp Mussoorie
                </div>
                <div className="mt-4 text-lg leading-7 text-justify max-md:max-w-full">
                  Discover Your Mountain Oasis: Experience Luxury Camping at
                  Everest Base Camp Mussoorie!
                </div>
              </div>
            </div>
            <div className="flex md:items-center flex-col md:w-[30%] w-full ">
              <div className="flex flex-col grow text-white">
                <div className="text-3xl font-bold tracking-wider leading-10">
                  Links
                </div>
                <div className="flex flex-col gap-1 mt-4 text-lg leading-7">
                  <Link href={"/about"}>About Us</Link>
                  <Link href={"/activities"}>Activities</Link>
                  {/* <Link href={"/contact"}>
                      Contact Us

                    </Link> */}
                  <Link href={"/rooms"}>Our Rooms</Link>
                  <Link href={"/gallery"}>Gallery</Link>
                  <Link href={"/parkcafe"}>Park Cafe</Link>
                  <Link href={"/glamper"}>A Glamper&apos;s Guide</Link>
                  <Link href={"/blogs"}>Blogs</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col  md:w-[30%] w-full ">
              <div className="text-3xl font-bold tracking-wider leading-10 text-white">
                Reach Out
              </div>
              <div className="mt-4 text-lg leading-7 text-white">
                Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                Mussoorie, Uttarakhand, 248179
              </div>

              <Link
                href={"mailto:info@ebcmussoorie.com"}
                className="flex items-center gap-3 mt-4 text-lg leading-7 text-white whitespace-nowrap"
              >
                <IoMail size={20} />
                <div className="my-auto">info@ebcmussoorie.com</div>
              </Link>
              <Link
                href={"tel:+918595274861"}
                className="flex items-center gap-3 mt-2 text-lg leading-7 text-white whitespace-nowrap"
              >
                <MdCall size={20} />
                <div className="my-auto">+91-85952 74861</div>
              </Link>
              <div className="flex gap-4 pr-20 mt-4 max-md:pr-5">
                <Link
                  href={"https://www.facebook.com/ebcmussoorie/"}
                  target="_blank"
                >
                  {" "}
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Face />
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/ebcmussoorie/"}
                  target="_blank"
                >
                  {" "}
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Insta />
                  </div>
                </Link>
                <Link
                  href={"https://www.facebook.com/ebcmussoorie/"}
                  target="_blank"
                >
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Trip />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 mt-8">
            <div className="flex gap-5 maxwidth mx-auto justify-between px-5 py-5 w-full text-xs tracking-wider leading-5 text-white  max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-3 font-medium">
                <Image
                  alt="icon"
                  width={100}
                  height={100}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f2ebd1425476a83f9785a32d2e5632db68bf9f8db8e123ca89682af54513cec?"
                  className="shrink-0 my-auto w-3 aspect-square fill-white"
                />
                <div>Copyright EBC Mussoorie</div>
              </div>
              <div className="flex gap-3 whitespace-nowrap">
                <div className="">
                  <Link href={"/privacy"}>Privacy</Link>
                </div>
                <div className="">
                  <Link href={"/terms"}>Terms</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

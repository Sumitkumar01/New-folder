"use client";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import { MdCall } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Face, Insta, Trip } from "../icons/icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      {pathname === "" ? (
        <HomeNav />
      ) : (
        <div className="maxwidth mx-auto flex flex-col">
          <>
            <div className="grid items-center pt-2 px-6 grid-cols-3 gap-5 w-full max-md:flex-wrap max-md:max-w-full">
              <div
                className="xl:hidden z-40"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? (
                  <div
                    // style={{
                    //   rotate: open ? "180deg" : "0deg",
                    //   transition: "all 0.4s",
                    // }}
                    className="text-white font-bold text-xl"
                  >
                    X
                  </div>
                ) : (
                  <div
                    style={{
                      rotate: open ? "45deg" : "0deg",
                      transition: "all 0.4s",
                    }}
                  >
                    <HamMenu />
                  </div>
                )}
              </div>
              <Link
                href={"tel:+918595274861"}
                className="hidden xl:flex items-center gap-2 px-5 my-auto text-lg leading-7 text-[#acacac]"
              >
                <MdCall size={20} />
                <div className="my-auto text-[#acacac]">+91-85952 74861</div>
              </Link>
              <Link
                href={"/"}
                className="flex h-[120px] justify-center  max-md:ml-0 max-md:w-full"
              >
                <Image
                  loading="lazy"
                  src={Logo}
                  alt="ebc"
                  className="grow shrink-0 max-w-full aspect-[1.64] w-[308px]"
                />
              </Link>
              <div className="hidden xl:flex flex-col items-end max-md:ml-0">
                <div className="flex justify-end gap-2 self-stretch my-auto max-md:mt-10">
                  <div className="w-[20%]"></div>
                  <div className="flex gap-3 px-5 my-auto">
                    <Link
                      href={"https://www.facebook.com/ebcmussoorie/"}
                      target="_blank"
                      className="h-10 w-10 flex justify-center items-center rounded-full bg-white"
                    >
                      <Face />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/ebcmussoorie/"}
                      target="_blank"
                      className="h-10 w-10 flex justify-center items-center rounded-full bg-white"
                    >
                      <Insta />
                    </Link>
                    <Link
                      href={"https://www.facebook.com/ebcmussoorie/"}
                      target="_blank"
                      className="h-10 w-10 flex justify-center items-center rounded-full bg-white"
                    >
                      <Trip />
                    </Link>
                  </div>
                  <Link
                    href={
                      "https://live.ipms247.com/booking/book-rooms-everestbasecamp"
                    }
                    target="_blank"
                    className="rounded-sm flex items-center justify-center w-[150px] py-2 text-lg font-semibold tracking-normal leading-7 text-[#29422C] bg-stone-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="xl:hidden flex justify-end">
                <Link
                  href={"tel:+918595274861"}
                  className="flex items-center gap-2 px-5 my-auto text-lg leading-7 text-[#acacac]"
                >
                  <MdCall size={20} />
                  <div className="my-auto text-[#acacac] xl:block hidden">
                    +91-85952 74861
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden xl:flex gap-5 justify-between self-center px-5 mt-6 text-lg leading-7 text-center text-white max-md:flex-wrap max-md:mt-10">
              <Link
                href={"/about"}
                className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
              >
                About Us
              </Link>
              <Link
                href={"/activities"}
                className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
              >
                Activities
              </Link>
              {/* <Link href={"/contact"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Contact Us
                                </Link> */}
              <Link
                href={"/rooms"}
                className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
              >
                Our Rooms
              </Link>
              <Link
                href={"/gallery"}
                className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
              >
                Gallery
              </Link>
              <Link
                href={"/parkcafe"}
                className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
              >
                Park Cafe
              </Link>
              <Link
                href={"/glamper"}
                className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
              >
                {`A Glamper's Guide`}
              </Link>
              <Link
                href={"/blogs"}
                className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
              >
                Blog
              </Link>
            </div>
            <MobileNav open={open} />
          </>
        </div>
      )}
    </>
  );
};

const HomeNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#152116]">
      <div className="maxwidth mx-auto flex flex-col px-8 xl:py-2 py-6">
        <div className="flex justify-between items-center gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <Link
            href={"tel:+918595274861"}
            className="flex items-center gap-2 md:px-5 my-auto text-lg leading-7 text-[#acacac]"
          >
            <MdCall size={20} />
            <div className="my-auto text-[#acacac] xl:block hidden">
              +91-85952 74861
            </div>
          </Link>

          <div className="hidden xl:flex gap-5 justify-between self-center px-5 text-lg leading-7 text-center text-white max-md:flex-wrap max-md:mt-10">
            <Link
              href={"/about"}
              className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
            >
              About Us
            </Link>
            <Link
              href={"/activities"}
              className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
            >
              Activities
            </Link>
            {/* <Link href={"/contact"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            Contact Us
                        </Link> */}
            <Link
              href={"/rooms"}
              className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
            >
              Our Rooms
            </Link>
            <Link
              href={"/gallery"}
              className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
            >
              Gallery
            </Link>
            <Link
              href={"/parkcafe"}
              className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
            >
              Park Cafe
            </Link>
            <Link
              href={"/glamper"}
              className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
            >
              {`A Glamper's Guide`}
            </Link>
            <Link
              href={"/blogs"}
              className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
            >
              Blog
            </Link>
          </div>

          <div className="hidden xl:block">
            <Link
              href={
                "https://live.ipms247.com/booking/book-rooms-everestbasecamp"
              }
              target="_blank"
              className="rounded-sm flex items-center justify-center  px-10 py-2 text-lg font-semibold tracking-normal leading-7 text-[] bg-stone-300"
            >
              Book Now
            </Link>
          </div>

          <div
            className="xl:hidden z-40"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <div
                // style={{
                //   rotate: open ? "180deg" : "0deg",
                //   transition: "all 0.4s",
                // }}
                className="text-white font-bold text-xl"
              >
                X
              </div>
            ) : (
              <div
              // style={{
              //   rotate: open ? "45deg" : "0deg",
              //   transition: "all 0.4s",
              // }}
              >
                <HamMenu />
              </div>
            )}
          </div>
        </div>
        <MobileNav open={open} />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNav = ({ open }) => {
  return (
    <div
      className="fixed top-0 z-30 w-full h-screen flex justify-center items-center bg-[#29422C]"
      style={{
        left: open ? "0%" : "100%",
        transition: "all 0.5s",
      }}
    >
      <div className="flex items-center flex-col gap-4">
        <Link
          href={"/about"}
          className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
        >
          About Us
        </Link>
        <Link
          href={"/activities"}
          className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
        >
          Activities
        </Link>
        {/* <Link href={"/contact"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Contact Us
                                </Link> */}
        <Link
          href={"/rooms"}
          className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
        >
          Our Rooms
        </Link>
        <Link
          href={"/gallery"}
          className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
        >
          Gallery
        </Link>
        <Link
          href={"/parkcafe"}
          className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
        >
          Park Cafe
        </Link>
        <Link
          href={"/glamper"}
          className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
        >
          {`A Glamper's Guide`}
        </Link>
        <Link
          href={"/blogs"}
          className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

const HamMenu = () => {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18H26M2 10H26M2 2H26"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FaceBook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
    >
      <circle cx="14" cy="14.5" r="14" fill="#BCD0B8" />
      <path
        d="M20 4.5H17C15.6739 4.5 14.4021 5.02678 13.4645 5.96447C12.5268 6.90215 12 8.17392 12 9.5V12.5H9V16.5H12V24.5H16V16.5H19L20 12.5H16V9.5C16 9.23478 16.1054 8.98043 16.2929 8.79289C16.4804 8.60536 16.7348 8.5 17 8.5H20V4.5Z"
        stroke="#29422C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const InstaGram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
    >
      <circle cx="14" cy="14.5" r="14" fill="#BCD0B8" />
      <path
        d="M14.0009 18.0554C14.9439 18.0554 15.8482 17.6808 16.515 17.014C17.1818 16.3473 17.5564 15.4429 17.5564 14.4999C17.5564 13.5569 17.1818 12.6525 16.515 11.9857C15.8482 11.3189 14.9439 10.9443 14.0009 10.9443C13.0579 10.9443 12.1535 11.3189 11.4867 11.9857C10.8199 12.6525 10.4453 13.5569 10.4453 14.4999C10.4453 15.4429 10.8199 16.3473 11.4867 17.014C12.1535 17.6808 13.0579 18.0554 14.0009 18.0554Z"
        stroke="#29422C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18.0556V10.9444C6 9.7657 6.46825 8.63524 7.30175 7.80175C8.13524 6.96825 9.2657 6.5 10.4444 6.5H17.5556C18.7343 6.5 19.8648 6.96825 20.6983 7.80175C21.5317 8.63524 22 9.7657 22 10.9444V18.0556C22 19.2343 21.5317 20.3648 20.6983 21.1983C19.8648 22.0317 18.7343 22.5 17.5556 22.5H10.4444C9.2657 22.5 8.13524 22.0317 7.30175 21.1983C6.46825 20.3648 6 19.2343 6 18.0556Z"
        stroke="#29422C"
        strokeWidth="1.5"
      />
      <path
        d="M18.8906 9.62135L18.9006 9.61035"
        stroke="#29422C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Tri = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
    >
      <circle cx="14" cy="14.5" r="14" fill="#BCD0B8" />
      <path
        d="M22.5967 13.09C22.8259 12.1563 23.5549 11.2222 23.5549 11.2222H20.2861C18.4497 10.0947 16.2241 9.5 13.7546 9.5C11.1958 9.5 8.88522 10.104 7.06106 11.2407H4C4 11.2407 4.71867 12.1592 4.95089 13.0865C4.35628 13.8663 4 14.8063 4 15.8397C4 18.4021 6.19939 20.488 8.89806 20.488C10.4423 20.488 11.81 19.8016 12.7144 18.7444L13.7515 20.2252L14.8051 18.7258C15.28 19.3062 15.8958 19.7689 16.5999 20.0743C17.7873 20.5849 19.1207 20.6424 20.3429 20.213C22.8736 19.3218 24.1685 16.6381 23.2396 14.2359C23.0798 13.8246 22.8577 13.4375 22.5802 13.0871L22.5967 13.09ZM20.0117 19.3363C19.5307 19.5073 19.0187 19.5856 18.5054 19.5665C17.9922 19.5473 17.4882 19.4312 17.0228 19.2249C16.3608 18.9334 15.7992 18.4702 15.4027 17.8886C15.2365 17.6565 15.0972 17.4052 14.9921 17.1366C14.8704 16.8308 14.8136 16.5169 14.7818 16.1966C14.7213 15.5531 14.8167 14.9032 15.1094 14.2986C15.3245 13.8549 15.6298 13.4559 16.0077 13.1245C16.3857 12.7931 16.8289 12.5359 17.3118 12.3676C19.3401 11.6602 21.5896 12.6484 22.3346 14.5673C23.0826 16.4867 22.0418 18.6237 20.0239 19.3339H20.0117V19.3363ZM12.1345 17.917C11.7765 18.4197 11.2943 18.8315 10.73 19.1164C10.1657 19.4013 9.53655 19.5507 8.89745 19.5515C6.74328 19.5515 4.98572 17.8833 4.98572 15.8403C4.98572 13.7973 6.74328 12.1262 8.89745 12.1262C11.0528 12.1262 12.8061 13.7973 12.8061 15.8403C12.8061 15.9674 12.7841 16.0817 12.7676 16.2117C12.701 16.8377 12.4908 17.4302 12.1345 17.9286V17.917ZM6.41083 15.7916C6.41083 17.0611 7.49922 18.0887 8.83328 18.0887C10.1673 18.0887 11.2527 17.0611 11.2527 15.7916C11.2527 15.1823 10.9978 14.598 10.544 14.1672C10.0903 13.7364 9.47494 13.4944 8.83328 13.4944C8.19162 13.4944 7.57624 13.7364 7.12251 14.1672C6.66879 14.598 6.41389 15.1823 6.41389 15.7916H6.41083ZM16.2302 15.7916C16.2297 16.2457 16.3711 16.6898 16.6365 17.0677C16.902 17.4455 17.2795 17.7401 17.7213 17.9141C18.1631 18.0881 18.6494 18.1338 19.1185 18.0454C19.5877 17.9569 20.0187 17.7383 20.357 17.4172C20.6952 17.0961 20.9256 16.6869 21.0189 16.2415C21.1121 15.796 21.0641 15.3343 20.881 14.9148C20.6978 14.4952 20.3876 14.1367 19.9898 13.8846C19.5919 13.6325 19.1242 13.4981 18.6459 13.4984C18.0052 13.4991 17.3908 13.7407 16.9373 14.1705C16.4839 14.6003 16.2283 15.1832 16.2265 15.7916H16.2302ZM7.24867 15.7916C7.24883 15.3936 7.41499 15.0119 7.7108 14.7299C8.00662 14.4479 8.40801 14.2887 8.82717 14.287C9.69311 14.287 10.4154 14.9641 10.4154 15.7916C10.4154 16.1919 10.2479 16.5759 9.9498 16.8589C9.65166 17.142 9.24728 17.3011 8.82564 17.3011C8.404 17.3011 7.99962 17.142 7.70148 16.8589C7.40333 16.5759 7.23583 16.1919 7.23583 15.7916H7.24867ZM17.0552 15.7916C17.0552 15.3925 17.2221 15.0098 17.5193 14.7277C17.8165 14.4455 18.2195 14.287 18.6398 14.287C19.0553 14.2958 19.4505 14.459 19.7407 14.7415C20.0308 15.024 20.1926 15.4033 20.1914 15.7979C20.1902 16.1924 20.0261 16.5708 19.7342 16.8518C19.4424 17.1327 19.0461 17.2937 18.6306 17.3002C18.4219 17.3004 18.2152 17.2616 18.0223 17.1858C17.8294 17.1101 17.6542 16.999 17.5066 16.8588C17.359 16.7187 17.2419 16.5523 17.1622 16.3692C17.0824 16.186 17.0415 15.9897 17.0417 15.7916H17.0552ZM13.7509 10.3123C15.5109 10.3123 17.0998 10.6117 18.4937 11.2106C17.9634 11.2239 17.4387 11.3177 16.9397 11.4885C16.3345 11.6968 15.7795 12.0181 15.3072 12.4334C14.8349 12.8486 14.4549 13.3495 14.1897 13.9064C13.9354 14.417 13.8016 14.9578 13.7503 15.5049C13.6601 14.3483 13.1188 13.2651 12.2324 12.4671C11.346 11.6691 10.178 11.2136 8.95672 11.1897C10.3507 10.6216 11.9683 10.3129 13.7154 10.3129L13.7509 10.3123Z"
        fill="#29422C"
      />
    </svg>
  );
};

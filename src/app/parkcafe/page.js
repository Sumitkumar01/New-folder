import Image from "next/image";
import BannerImage from "../../../public/images/parkcafebg.jpg";
import Link from "next/link";
import parkcafe from "../../../public/images/parkcafe.jpg";
import parkcafereachus1 from "../../../public/images/parkcafereachus1.jpg";
import parkcafereachus2 from "../../../public/images/parkcafereachus2.jpg";

import burger from "../../../public/images/crispy_veg_burger.webp";
import pasta from "../../../public/images/pasta_alfredo.webp";
import butterchicken from "../../../public/images/Indian-Butter.jpg";
import chai from "../../../public/images/chai_latte.webp";

import chooseus1 from "../../../public/images/whychooseus1.jpg";
import chooseus2 from "../../../public/images/whychooseus2.jpg";

import picnic1 from "../../../public/images/picnic1.JPG";
import picnic2 from "../../../public/images/picnic2.JPG";

import barque1 from "../../../public/images/Barbecue1.webp";
// import barque2 from "../../../public/images/Barbecue2.webp";

import milestonebg from "../../../public/images/milestonebg.jpg";

import c1 from "../../../public/images/01 Picnic_11zon.jpg";
import img1 from "../../../public/picnic/_MG_1465.JPG";
import img2 from "../../../public/picnic/_MG_2878.JPG";
import SpecilizationCard from ".././../components/landingpage/SpecilizationCard";


import InstaGrid from "../../components/Activities/InstaGrid";
import WhatInstaButton from "../../utils/WhatInstaButton";
import OurCuisine from "./OurCuisine.jsx";
import HappyCustomers from "./HappyCustomers.jsx";
import OurAmenities from './OurAmenities'

export const metadata = {
  title: "Best Cafe in Mussoorie | Green Restaurant Mussoorie - EBC",
  description:
    "GFind the best cafe in Mussoorie at EBC! Enjoy delicious food, stunning views, and a cozy atmosphere. Perfect for relaxing and unwinding. Visit us today!",
};

const datas = [
  {
    heading: "Barbeque in the Shadows!",
    para: `Join us for "Barbeque in the Shadows," a cozy fireside evening filled with delicious bite-sized treats and treasured memories. Our serene property, acclaimed as the finest eatery in Mussoorie, sets the perfect stage for intimate celebrations and relaxation, enhancing the pleasure of unwinding together.

        Enjoy a private bonfire, a beautifully decorated candlelight table, and personalized butler service, all while selecting from a rich and varied menu under the flicker of Mashal torches.`,
    images: [barque1],
    button: "book now",
  },
  {
    heading: "Picnic in the Meadows!",
    para: `Experience an enchanting outdoor gathering surrounded by the wonders of nature, complemented by an Instagram-worthy picnic in the meadows. With vibrant pop color cutlery and chinaware, luxurious cushioned seating on carpets, and the option of tables and chairs under a picnic umbrella, every moment becomes a picture-perfect celebration.

        Savor in our multi-cuisine menu, offering a range of delectable options, perfect for a unique day dining experience in the mountains with your loved ones.  `,
    images: [picnic1, picnic2],
    button: "book now",
  },
];

const images = [
  {
    title: "Pasta Alfredo",
    img: pasta,
  },
  {
    title: "crispy veg burger",
    img: burger,
  },
  {
    title: "butter chicken",
    img: butterchicken,
  },
  {
    title: "chai/coffee",
    img: chai,
  },
];

const testimonal = [
  {
    title: "Pasta Alfredo",
    subtle: `  The property feels almost enigmatic, the location is
    surreal, and the view of the forest as soon as you wake up
    is something to die for. It's so mellow and peaceful here,
    the rooms are luxurious but it also feels like an
    adventure. Would 11/10 recommend this to everybody who are
    looking for a pristine and peaceful`,
    img: c1,
  },
  {
    title: "crispy veg burger",
    subtle: `  The property feels almost enigmatic, the location is
    surreal, and the view of the forest as soon as you wake up
    is something to die for. It's so mellow and peaceful here,
    the rooms are luxurious but it also feels like an
    adventure. Would 11/10 recommend this to everybody who are
    looking for a pristine and peaceful`,
    img: c1,
  },
  {
    title: "butter chicken",
    subtle: `  The property feels almost enigmatic, the location is
    surreal, and the view of the forest as soon as you wake up
    is something to die for. It's so mellow and peaceful here,
    the rooms are luxurious but it also feels like an
    adventure. Would 11/10 recommend this to everybody who are
    looking for a pristine and peaceful`,
    img: c1,
  },
  {
    title: "chai/coffee",
    subtle: `  The property feels almost enigmatic, the location is
    surreal, and the view of the forest as soon as you wake up
    is something to die for. It's so mellow and peaceful here,
    the rooms are luxurious but it also feels like an
    adventure. Would 11/10 recommend this to everybody who are
    looking for a pristine and peaceful`,
    img: c1,
  },
];

function Peakage() {
  return (
    <div>
      <div className="max-w-[1600px] w-full mx-auto relative">
        <div className="bg-[#D5D5D5] max-h-[700px] h-[300px] md:h-[700px] overflow-hidden">
          <Image
            src={BannerImage}
            alt="banner"
            className="h-full w-full object-cover object-bottom-[10%]"
            // fill
            // layout="fill"
            width={600}
            height={400}
          />
        </div>

        <div className="absolute top-0 left-0 z-20 w-full h-full flex items-center justify-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center md:text-5xl text-white">
              Welcome to Park Café! One of the best cafes in Mussoorie.
            </h2>
            <p className="text-center md:text-2xl mt-4 text-white">
              {` Our culinary gem seamlessly combines nature's beauty with
              exquisite flavors, offering a unique dining experience against the
              backdrop of breathtaking natural wonders.`}
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 bg-black/30 z-10 w-full h-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 mt-8 items-center maxwidth mx-auto py-12">
        <div className=" h-full flex flex-col justify-center bg-[#BCD0B8] space-y-6 p-5">
          <h2 className="text-5xl font-bold text-[#29422C]">
            Welcome to Park Cafe!·
          </h2>
          <p className="text-xl text-[#29422C]">
            To create a dining oasis in the middle of the wilderness, we at Park
            Café are all about fusing innovation and simplicity. Our menu offers
            a fusion of inventive twists and regional flavors, guaranteeing a
            delectable experience that ideally accentuates the soothing
            settings. Everything about this place is meant to evoke memories,
            from carefree picnic brunches with a variety of BBQ dishes to
            special dinners served with hot cocoa.
          </p>
          <p className="text-xl text-[#29422C]">
            {`   We're proud to serve a variety of delicious dishes that celebrate
            Mussoorie's culinary heritage. Our cafe is situated where Sir George
            Everest once had his stables and rode around, along with the George
            Everest Museum just a few minutes walk away. Book Now`}
          </p>

          <div className="flex">
            <Link
            target="_blank"
              href={"https://live.ipms247.com/booking/book-rooms-everestbasecamp"}
              className="text-2xl border border-[#29422c] bg-[#29422c] text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-black"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={parkcafe}
            alt="parkcafe3"
            className="object-cover w-full h-full"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className="py-8">
        <div className="grid lg:grid-cols-5 items-center maxwidth mx-auto px-5 gap-6">
          <div className=" col-span-3 grid grid-cols-5 gap-3">
            <div className="col-span-3">
              <Image
                alt="parkcafe1"
                src={parkcafereachus1}
                width={600}
                height={400}
                className="w-full md:h-[600px] h-[280px] object-cover"
              />
            </div>

            <div className="col-span-2">
              <Image
                src={parkcafereachus2}
                alt="parkcafe2"
                width={600}
                height={400}
                className="w-full md:h-[600px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <h2 className="text-white md:text-3xl text-2xl ">How to reach us?</h2>
            <p className="text-white text-lg">
              {` Nestled amidst nature at the Everest Base Camp in Mussoorie, Park
              Cafe offers a convenient location just a stone's throw away from
              the George Everest Museum. To enhance your experience, you can
              come by yourself or give us a call to make a reservation and get a
              pass that lets you drive straight up to the cafe.`}
            </p>
            <p className="text-white text-lg">
              {`   Don't miss the chance to explore the historical significance of
              our location, where Sir George Everest once had his stables and
              rode around.Plus, the George Everest Museum is just a couple of
              minutes' walk from our café. Conveniently, visitors can park their
              vehicles at the Park Café grounds before heading to the museum,
              ensuring a seamless and enjoyable visit.`}
            </p>

            <div>
              <Link
                target="_blank"
                href={
                  "https://www.google.com/maps/place/Everest+Base+Camp,+Near+George+Everest+House/@30.4772452,77.9937026,11.13z/data=!4m9!3m8!1s0x3908d170d61d91cb:0x84607e0d71c4450f!5m2!4m1!1i2!8m2!3d30.4592927!4d78.025305!16s%2Fg%2F11fp31k5lj?entry=tts"
                }
                className="bg-[#bcd0be] px-6 py-2"
              >
                Get Direction
              </Link>
            </div>
          </div>
        </div>
      </div>

      <OurCuisine images={images} />

      <div className="py-12">
        <div className="grid md:grid-cols-2 items-center maxwidth mx-auto px-5 gap-6">
          <div className="relative">
            <div className="">
              <Image
                src={chooseus1}
                width={600}
                height={400}
                alt="service"
                className="w-[520px] md:h-[400px] h-[280px] object-cover"
              />
            </div>

            <div className="absolute right-0 -bottom-12 md:block hidden">
              <Image
                src={chooseus2}
                width={600}
                height={100}
                alt="service2"
                className="w-[400px] h-[300px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white md:text-5xl text-2xl ">Why Choose Us ?</h2>
            <p className="text-white text-lg">
              {`  Discover what makes us the most unique cafe in Mussoorie – our
              unwavering commitment to a memorable dining experience that
              transcends the ordinary. At EBC, indulge in more than just a meal;
              it's a taste of home amidst the breathtaking beauty of nature.
              Nestled beside a beautiful meadow, our cafe offers a diverse range
              of offerings, from delightful tea and snacks to exquisite dining
              experiences.`}
            </p>
            <p className="text-white text-lg">
              Experience curated events and experiences that promise to elevate
              your visit. As a must-visit cafe in Mussoorie, EBC ensures an
              unforgettable culinary journey that celebrates nature and
              community.
            </p>
          </div>
        </div>
      </div>

      <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 py-12">
        <OurAmenities />

        <div className="rounded-lg overflow-hidden">
          {datas.map((data, index) => (
            <SpecilizationCard key={index} cardData={data} index={index} />
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto relative">
        <div className="bg-[#D5D5D5]  md:h-[600px] h-[400px] overflow-hidden">
          <Image
            src={milestonebg}
            alt="banner"
            // fill
            width={600}
            height={400}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-6">
          <div className="max-w-[400px] bg-[#ACACAC] p-5 mx-auto">
            <h2 className="text-center md:text-4xl text-[#29422C]">
              Mark Your Milestones with Us!
            </h2>
            <p className="text-center md:text-lg mt-4 text-[#29422C]">
              Experience unforgettable celebrations at Everest Base Camp
              ,Mussoorie. We customize every element to match your vision, from
              anniversaries to birthdays. With our attention to detail, your
              event will run seamlessly, letting you cherish every moment. Come
              celebrate with us and create memories to last a lifetime!
            </p>
          </div>
        </div>
      </div>

      <HappyCustomers testimonal={testimonal} />

      <div className="py-12 px-6">
        <InstaGrid />
        <div className="mt-10">
          <WhatInstaButton button={"insta"} link="https://www.instagram.com/ebcmussoorie/" />
        </div>

        <div className="maxwidth mx-auto mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5263208281!2d76.76357549901144!3d28.643684629087268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1717564178551!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <hr className="h-px my-4 bg-[#D5D5D5] border-0" />
    </div>
  );
}

export default Peakage;

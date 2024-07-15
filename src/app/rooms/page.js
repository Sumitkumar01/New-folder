import Roomscard from "../../components/Card/roomscard";

import {
  BedService,
  Cloth,
  Cup,
  FoodService,
  Heater,
  Lotus,
  PlateWithSpoon,
  Verified,
  Wifi,
} from "../../icons/icons";
import Link from "next/link";
import Image from "next/image";

import Room1 from "../../../public/rooms/20 Bedroom 4_11zon.jpg";
import Room2 from "../../../public/rooms/20 Bedroom 4_11zon.jpg";

import Surveyor1 from "../../../public/Surveyor Room/_MG_2465.JPG";
import Surveyor2 from "../../../public/Surveyor Room/_MG_2475.JPG";
import Surveyor3 from "../../../public/Surveyor Room/_MG_2477.JPG";
import Surveyor4 from "../../../public/Surveyor Room/_MG_2505.JPG";

import SurveyorSuite1 from "../../../public/Surveyor Suite Room/_MG_2601.JPG";
import SurveyorSuite2 from "../../../public/Surveyor Suite Room/_MG_2602.JPG";
import SurveyorSuite3 from "../../../public/Surveyor Suite Room/_MG_2603.JPG";
import SurveyorSuite4 from "../../../public/Surveyor Suite Room/_MG_2605.JPG";

export const metadata = {
  title:
    "Glamping Near Mussoorie | Glamping Near Rishikesh, Dehradun, Delhi - EBC",
  description:
    "Experience luxury glamping in Mussoorie, near Rishikesh, Dehradun, Delhi, and Gurugram at EBC. Enjoy tent house in mussoorie with us!",
};

const RoomsAccomodationData = {
  title: "Rooms and Accomodation",
  subtitle:
    "Wabi-Sabi has 12 Elegantly constructed and furnished spacious suites built such that each suite has a delightful view of the landscape garden, mountains and the dam offering a truly mesmerizing experience of living with nature. A well-designed and comfortable king size bed with all modern facilities and fully air-conditioned room adds to the relaxing ambience.",

  items: [
    {
      title: "The Camper",
      description: "Homely Haven  | 1-3 people  | 280sqft",
      subtitle:
        "Experience a cozy retreat in our Camper rooms, perfectly suited for couples seeking a luxurious holiday getaway. Nestled amidst the serene surroundings, these heat-insulated rooms provide unparalleled comfort and warmth. Step out onto your private balcony to soak in the breathtaking views of the Deodar forest while savoring delicious coffee.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Camper+room/F841F57F-16A6-403E-BA7F-6A9C46F5B2FA_1_105_c.jpeg",
          alt: "Clamperroom1",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Camper+room/60fee30b-cbab-4c0f-a1b4-7e5ac13e2596.jpg",
          alt: "Clamperroom2",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Camper+room/48fa811c-9e74-4660-a133-dfc9876ce533.jpg",
          alt: "Clamperroom3",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Camper+room/49f951c7-c0eb-4d65-ab06-55ac8d75729f.jpg",
          alt: "Clamperroom4",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Camper+room/cd99b055-be35-41fe-b324-4cb6e3e91b18.jpg",
          alt: "Clamperroom5",
        },
      ],

      link: {
        label: "Book now",
        href: "https://live.ipms247.com/booking/book-rooms-everestbasecamp",
      },
    },
    {
      title: "The Glamper",
      description: "Opulent Nature  | 1-3 people  | 375sqft",
      subtitle:
        "Glamper combines sophistication and style, providing a luxurious glamping experience in the wilderness of Everest Base Camp, Mussoorie. Enjoy plush interiors and exclusive luxury rooms for a truly indulgent retreat. Step into a world of extravagance and nature as you sip on delicious hot chocolate and admire the beauty of the Deodar forest. Best suited for small groups. Don't miss our special netted balcony space, perfect for capturing Instagram-worthy moments.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/Glamper+Room/_MG_2556.JPG",
          alt: "glamper",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/Glamper+Room/_MG_2557.JPG",
          alt: "glamper",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/theglamper.webp",
          alt: "glamper",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/theglamper1.webp",
          alt: "glamper",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/theglamper2.webp",
          alt: "glamper",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/theglamper4.webp",
          alt: "glamper",
        },
      ],

      link: {
        label: "Book now",
        href: "https://live.ipms247.com/booking/book-rooms-everestbasecamp",
      },
    },
    {
      title: "The Surveyor",
      description: "Meadow view Cabins  | 1-3 people  | 450sqft",
      subtitle:
        "Experience in the ultimate wilderness retreat amidst our expansive 20 acres of spacious tents, offering the best views of a lush green forest meadow. After a day of exploration, find solace and rejuvenate your senses in the serene surroundings, surrounded by breathtaking views of the Deodar forest. Best Suited for families or small friend groups. Enjoy utmost privacy and comfort in our tranquil ambiance, inviting you to rediscover yourself amidst nature's embrace.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Surveyor+room/cda949b0-cc7a-44de-98f9-8c09ef920fbc.jpg",
          alt: "document1",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Surveyor+room/DSC_6438.jpg",
          alt: "document1",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Surveyor+room/DSC_6442.jpg",
          alt: "document1",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Surveyor+room/DSC_6610.jpg",
          alt: "document1",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Surveyor+room/f15de0f9-399f-4636-aa75-30d7ee073bc4.jpg",
          alt: "document1",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/new/z2/Room+Media/Surveyor+room/be707a6e-7a36-45cb-a4ae-458d225c2eac.jpg",
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://live.ipms247.com/booking/book-rooms-everestbasecamp",
      },
    },
    {
      title: "The Surveyor Suit",
      description: "Opulent Wilderness  | 1-4 people | 600sqft",
      subtitle:
        "Experience unparalleled luxury amidst nature in our Surveyor Suite at Everest Base Camp, Mussoorie. Immerse yourself in a meticulously designed tent featuring spacious living areas, extravagant amenities, and breathtaking forest views. Relax in style with a king-sized bed and the option to set up a queen-sized sofa bed, accommodating up to four people. Perfect for families or friend groups of 4. Enjoy the utmost privacy and seclusion in our most premium and spacious room, offering tranquility and indulgence like never before.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/Surveyor+Suite+Room/_MG_2605.JPG",
          alt: "document1",
        },
        {
          src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/ebcmussoorie/image/Z1/Surveyor+Suite+Room/_MG_2611.JPG",
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://live.ipms247.com/booking/book-rooms-everestbasecamp",
      },
    },
  ],
};

const page = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-5 mt-8 items-center">
        <div className="col-span-2 h-full flex flex-col justify-center bg-[#BCD0B8] space-y-6 p-4">
          <h2 className="text-5xl font-bold text-[#29422C]">
            Escape from the Urban Hustle!
          </h2>
          <p className="text-xl text-justify text-[#29422C]">
            {` Feeling drained by the hustle and bustle of city life? Escape to EBC
            Mussoorie and rediscover your connection with nature. Rejuvenate
            your mind and soul amidst the serene beauty of our glamping
            destination, set within 20 acres of ancient deodar forest. Our
            all-weather tents ensure comfort and shelter, whether it's rain,
            snow, hail, or sun.`}
          </p>
          <p className="text-xl text-justify text-[#29422C]">
            Experience the rich legacy of Sir George Everest, the esteemed
            former Surveyor General of India, and embark on a journey of
            relaxation and rejuvenation like never before.
          </p>

          <div className="flex">
            <Link
              href={"/"}
              className="text-2xl border border-[#29422c] bg-[#29422c] text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-black"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="col-span-3 w-full h-full">
          <Image
            src={Room1}
            alt="test"
            className="object-cover w-full h-full"
            // fill
            // width={100}
            // height={100}
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 maxwidth mx-auto mt-10 px-4">
        {RoomsAccomodationData.items.map((item, index) => (
          <Roomscard {...item} index={index} key={index} />
        ))}
      </div>

      <div className="bg-[#BCD0B8] py-12 mt-10">
        <div className="grid md:grid-cols-2 gap-8 maxwidth px-6 mx-auto items-center">
          <div>
            <h2 className="md:text-4xl text-2xl">Home Alone with Nature!</h2>
            <p className="mt-2 text-lg">
              You’re in for a wild time! The experiences and activities that
              await you at the campsite are nothing less than a love affair with
              deodars, magpies, and untouched serenity.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3">
              <input
                placeholder="Email Address "
                className="w-full py-3 px-2 bg-transparent border-b  border-b-gray-500 outline-none"
              />
            </div>
            <div className="col-span-2">
              <button className="bg-[#29422C] py-3 text-white w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
